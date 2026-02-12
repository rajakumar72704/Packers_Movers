import axios from "axios";

const verifyCaptcha = async (req, res, next) => {

  // 1️⃣ Get captcha token from frontend
  const captchaToken = req.body.captchaToken;

  // 2️⃣ If token missing → stop request
  if (!captchaToken) {
    return res.status(400).json({
      message: "Please verify captcha"
    });
  }

  try {
    // 3️⃣ Send token to Google for verification
    const googleResponse = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET,
          response: captchaToken
        }
      }
    );

    // 4️⃣ If captcha failed → stop
    if (!googleResponse.data.success) {
      return res.status(401).json({
        message: "Captcha verification failed"
      });
    }

    // 5️⃣ Captcha success → go to controller
    next();

  } catch (error) {
    return res.status(500).json({
      message: "Captcha server error"
    });
  }
};

export default verifyCaptcha;
