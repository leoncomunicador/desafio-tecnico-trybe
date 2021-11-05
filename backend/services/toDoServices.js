const toDoModels = require('../models/toDoModels');

const getAllTasks = async () => {
  const tasks = await toDoModels.getAllTasks();
  return tasks;
};

const getByTask = async (task) => {
  const getTask = await toDoModels.getByTask(task);
  return getTask;
};

const createTask = async (task) => {
  const newTask = await toDoModels.createTask(task);
  return newTask;
};

const updateTask = async (id, task) => {
  await toDoModels.updateTask(id, task);
  const taskUpdated = await toDoModels.getByTask(task);
  return taskUpdated;
};

const excludeTask = async (id) => {
  const excludeTask = await toDoModels.excludeTask(id);
  return excludeTask;
}

module.exports = {
  getAllTasks,
  getByTask,
  createTask,
  updateTask,
  excludeTask,
};
