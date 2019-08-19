const service = require('../services/task')

const list = async (req, res) => {
  try {
    const tasks = await service.list({ projectId: req.params.id })

    return res.send(tasks)
  } catch (error) {
    return res.status(500).send(error)
  }
}

const create = async (req, res) => {
  try {
    const newTask = await service.create({ projectId: req.params.id, task: req.body })

    return res.send(newTask)
  } catch (error) {
    return res.status(500).send(error)
  }
}

module.exports = {
  list,
  create
}
