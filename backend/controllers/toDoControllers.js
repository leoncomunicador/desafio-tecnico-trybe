const toDoServices = require('../services/toDoServices');

const getAllTasks = async (req, res) => {
  const tasks = await toDoServices.getAllTasks();
  res.status(200).json({ tasks });
};

const getByTask = async (req, res) => {
  const { task } = req.body;

  const showTask = await toDoServices.getByTask(task);

  res.status(200).json(showTask);
};

const createTask = async (req, res) => {
  const { task } = req.body;

  const newTask = await toDoServices.createTask(task);

  res.status(201).json(newTask);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  const taskUpdated = await toDoServices.updateTask(id, task);
  console.log(taskUpdated);

  res.status(201).json(taskUpdated);
};

const excludeTask = async (req, res) => {
  const { id } = req.params;

  const task = await toDoServices.excludeTask(id);

  res.status(200).json(task);
};

module.exports = {
  getAllTasks,
  getByTask,
  createTask,
  updateTask,
  excludeTask,
};
