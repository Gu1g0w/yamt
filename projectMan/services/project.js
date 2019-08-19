const orm = require('../orm')

const create = project => orm.project.create(project)

const list = () => orm.project.findAll()

const getById = ({ projectId }) => orm.project.findOne({ where: { id: projectId } })

const remove = ({ projectId }) => Promise.all([
  orm.task.destroy({ where: { projectId } }),
  orm.project.destroy({ where: { id: projectId } })
])

module.exports = {
  create,
  list,
  getById,
  remove
}
