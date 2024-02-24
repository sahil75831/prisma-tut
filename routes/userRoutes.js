import express from "express";
import {
  createUser,
  deleteUser,
  fetchUsers,
  particularUser,
  updateUser,
} from "../Controller/UserController.js";

const router = express.Router();

router.route("/").post(createUser);
router.put("/:id", updateUser);
router.get("/allusers", fetchUsers);
router.route("/:id").get(particularUser).delete(deleteUser);

export default router;
