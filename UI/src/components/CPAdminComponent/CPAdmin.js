import './CPAdmin.css';
import { useState } from 'react';
import { __userapiurl } from '../../API_URL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CPAdmin() {

    const navigate = useNavigate();
    const [output, setOutput] = useState();
    const [email, setEmail] = useState(localStorage.getItem("email"));
    const [opassword, setOldPassword] = useState("");
    const [npassword, setNewPassword] = useState("");
    const [cnpassword, setConfirmNewPassword] = useState("");

    /* ===============================
       CLIENT-SIDE VALIDATION (ADDED)
       =============================== */
    const validateBeforeSubmit = () => {
        let valid = true;

        // remove old error styles
        document.querySelectorAll(".input-error").forEach(el =>
            el.classList.remove("input-error")
        );

        // get all password inputs (order matters)
        const inputs = document.querySelectorAll('#tooplate_content input[type="password"]');

        if (!opassword) {
            inputs[0]?.classList.add("input-error");
            setOutput("Old Password is required");
            valid = false;
        }
        else if (!npassword || npassword.length < 6) {
            inputs[1]?.classList.add("input-error");
            setOutput("New Password must be at least 6 characters");
            valid = false;
        }
        else if (npassword !== cnpassword) {
            inputs[2]?.classList.add("input-error");
            setOutput("New Password and Confirm New Password must be same");
            valid = false;
        }

        return valid;
    };

    /* ===============================
       SUBMIT HANDLER (EXTENDED)
       =============================== */
    const handleSubmit = () => {

        // frontend validation first
        if (!validateBeforeSubmit()) return;

        axios.get(__userapiurl + "fetch", {
            params: { "email": email, "password": opassword }
        }).then(() => {

            axios.patch(__userapiurl + "update", {
                "condition_obj": { "email": email },
                "content_obj": { "password": cnpassword }
            }).then(() => {
                alert("Password Changed Successfully.....");
                navigate("/logout");
            });

        }).catch(() => {
            setOutput("Invalid Old Password");
            setOldPassword("");
        });
    };

    return (
        <>
            <div id="tooplate_content">
                <div class="content_box content_box_last">
                    <h2>Change Password Here.....</h2>
                    <font color="blue">{output}</font>

                    <form>
                        <label>Old Password:</label>
                        <input
                            type="password"
                            onChange={e => setOldPassword(e.target.value)}
                            value={opassword}
                        />
                        <br /><br />

                        <label>New Password:</label>
                        <input
                            type="password"
                            onChange={e => setNewPassword(e.target.value)}
                            value={npassword}
                        />
                        <br /><br />

                        <label>Confirm New Password:</label>
                        <input
                            type="password"
                            onChange={e => setConfirmNewPassword(e.target.value)}
                            value={cnpassword}
                        />
                        <br /><br />

                        <button type="button" onClick={handleSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CPAdmin;
