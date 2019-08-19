const service = require('../services/project')

const list = async (req, res) => {
  try {
    const projects = await service.list()

    return res.send(projects)
  } catch (error) {
    return res.status(500).send(error)
  }
}

const get = async (req, res) => {
  try {
    const project = await service.getById({ projectId: req.params.id })
    if (!project) {
      return res.status(404).send()
    }
    return res.send(project)
  } catch (error) {
    return res.status(500).send(error)
  }
}

const create = async (req, res) => {
  try {
    const newProject = await service.create(req.body)

    return res.send(newProject)
  } catch (error) {
    return res.status(500).send(error)
  }
}

const remove = async (req, res) => {
  try {
    await service.remove({ projectId: req.params.id })

    return res.send()
  } catch (error) {
    return res.status(500).send(error)
  }
}

module.exports = {
  list,
  get,
  create,
  remove
}
