import { useState, useRef, useEffect } from "react";
import "./AiChat.css";

const AiChat = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setChat((prev) => [...prev, { sender:"you", text:input }]);
    const msg = input;
    setInput("");

    try {
      const res = await fetch("http://localhost:3001/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({ message: msg }),
      });

      const data = await res.json();

      setChat((prev)=>[
        ...prev,
        { sender:"ai", text:data.reply }
      ]);

    } catch {
      setChat((prev)=>[
        ...prev,
        { sender:"ai", text:"⚠ Server error. Try again." }
      ]);
    }
  };

  const keySend = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
  <>
    {/* floating help icon */}
    <div
      className="ai-floating-btn"
      onClick={() => setOpen(!open)}
    >
      🤖
      {!open && <span className="help-text">Help</span>}
    </div>

    {open && (
      <div className="chatWindow">

        {/* HEADER */}
        <div className="chatHeader">
          <div className="chatHeaderLeft">
            <div className="botAvatar">🤖</div>
            <div>
              <div className="botName">AI Assistant</div>
              <div className="botStatus">Online</div>
            </div>
          </div>
          <button className="closeBtn" onClick={() => setOpen(false)}>✕</button>
        </div>

        {/* BODY */}
        <div className="chatBody">
          {chat.length === 0 && (
            <div className="welcomeMsg">
              👋 Hi! I’m your AI assistant.<br/>
              How can I help you today?
            </div>
          )}

          {chat.map((msg, i) => (
            <div key={i} className={`msg ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* INPUT */}
        <div className="chatInputArea">
          <input
            value={input}
            onKeyDown={keySend}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>

      </div>
    )}
  </>
);
};
  
export default AiChat;
