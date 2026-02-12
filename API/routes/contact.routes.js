import express from 'express';

//to link controller
import * as subcategoryController from '../controller/contact.controller.js';

const router = express.Router();

router.patch("/update-status", updateStatus);



export default router;