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

const completeTask = async (req, res) => {
  try {
    const result = await service.completeTask({ projectId: req.params.id, taskId: req.params.taskId })

    if (result[0] === 0) { // Affected count
      return res.status(404).send()
    }

    const updatedTasks = await service.list({ projectId: req.params.id })

    return res.send(updatedTasks)
  } catch (error) {
    return res.status(500).send(error)
  }
}

module.exports = {
  list,
  create,
  completeTask
}
