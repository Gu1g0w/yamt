const orm = require('../orm')

const create = ({ projectId, task }) => orm.task.create({ projectId, ...task })

const list = ({ projectId }) => orm.task.findAll({ where: { projectId } })

module.exports = {
  create,
  list
}
