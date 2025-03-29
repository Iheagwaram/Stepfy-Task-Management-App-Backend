const express = require("express");
const router = express.Router();
const { getTasks, createTask, deleteTask } = require("../controllers/taskController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", authMiddleware, getTasks);
router.post("/", authMiddleware, createTask);
router.delete("/:id", authMiddleware, deleteTask);

module.exports = router;