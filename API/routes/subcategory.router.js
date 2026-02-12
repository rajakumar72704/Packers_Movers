import express from 'express';

//to link controller
import * as subcategoryController from '../controller/subcategory.controller.js';

const router = express.Router();

router.post("/save",subcategoryController.save);
router.get("/fetch",subcategoryController.fetch);
router.get("/fetch", subcategoryController.fetch);
router.get("/fetch/:id", subcategoryController.fetchById);
router.patch("/update/:id", subcategoryController.update);
router.delete("/delete/:id", subcategoryController.deleteSubCategory);

export default router;