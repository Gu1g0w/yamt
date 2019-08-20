const orm = require('../orm')

const create = ({ projectId, task }) => orm.task.create({ projectId, ...task })

const list = ({ projectId }) => orm.task.findAll({ where: { projectId } })

const completeTask = ({ projectId, taskId }) => orm.task.update(
  { completed: true },
  { where: { projectId, id: taskId } })

module.exports = {
  create,
  list,
  completeTask
}
