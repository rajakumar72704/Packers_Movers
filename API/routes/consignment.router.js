import express from "express";
import { addConsignment, fetchConsignments, deleteConsignment } from "../controller/consignment.controller.js";
import { updateConsignmentStatus } from "../controller/consignment.controller.js";
import { trackConsignment } from "../controller/consignment.controller.js";


const router = express.Router();

router.post("/add", addConsignment);
router.get("/fetch", fetchConsignments);
router.delete("/delete/:id", deleteConsignment);
router.patch("/update-status/:id", updateConsignmentStatus);
router.get("/track/:id", trackConsignment);

export default router;
