import express from "express";

//to link controller
import * as categoryController from "../controller/category.controller.js";

const router = express.Router();

router.post("/save", categoryController.save);
router.get("/fetch", categoryController.fetch); 
router.patch("/update/:id", categoryController.update);
router.delete("/delete/:id", categoryController.deleteCategory);
router.get("/fetch/:id", categoryController.fetchById);


export default router;