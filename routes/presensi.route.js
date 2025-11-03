import express from "express";
import {
  getAllPresensi,
  getPresensiById,
  addPresensi,
} from "../controllers/presensi.controller.js";

const router = express.Router();

router.get("/", getAllPresensi);
router.get("/:id", getPresensiById);
router.post("/add", addPresensi);

export default router;
