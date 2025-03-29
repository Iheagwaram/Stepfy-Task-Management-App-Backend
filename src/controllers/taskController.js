const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { title, category } = req.body;
    const newTask = new Task({ user: req.user.id, title, category });
    await newTask.save();
    res.json(newTask);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: "Task not found" });
    if (task.user.toString() !== req.user.id) return res.status(401).json({ msg: "Not authorized" });
    await task.remove();
    res.json({ msg: "Task removed" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};