import express from 'express';

//to link controller
import * as UserController from '../controller/user.controller.js';

// ✅ import captcha middleware
import verifyCaptcha from '../middleware/verifyCaptcha.js';

const router = express.Router();

router.post("/save",UserController.save);

router.post("/login",verifyCaptcha,UserController.login);

router.get("/fetch",UserController.fetch);

router.delete("/delete",UserController.deleteUser);

router.patch("/update",UserController.update);

export default router;