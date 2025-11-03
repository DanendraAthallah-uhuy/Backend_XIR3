import express from "express";
import {
  getAllUsers,
  getUsersById,
  addUsers,
  editUsers,
  deleteUsers,
} from "../controllers/users.controller.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUsersById);
router.post("/add", addUsers);
router.put("/edit/:id", editUsers);
router.delete("/delete/:id", deleteUsers);

export default router;
