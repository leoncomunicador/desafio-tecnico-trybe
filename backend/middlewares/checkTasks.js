const toDoServices = require('../services/toDoServices');

const verifyHasTask = (req, res, next) => {
  const { task } = req.body;
  if (!task) {
    return res.status(422).json({
      err: { code: 'invalid_data', message: 'task is required!' },
    });
  }
  next();
}

const taskName = async (req, res, next) => {
  const { task } = req.body;
  const findTask = await toDoServices.getByTask(task);

  if (findTask) {
    return res.status(422).json({
      err: { code: 'invalid_data', message: 'Task already exists!' },
    });
  }
  next();
}

module.exports = {
  verifyHasTask,
  taskName,
}