import { Router } from "express";
const router: Router = Router();

import { createUsers, deleteUsers, getUsers, updateUsers } from "../controllers/users.ctrl";

router.get("/api/users", getUsers);
router.put("/api/users/:id", updateUsers);
router.post("/api/users", createUsers);
router.delete("/api/users/:id", deleteUsers);

export default router;