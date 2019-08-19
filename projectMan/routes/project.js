const router = require('express').Router()
const { checkSchema } = require('express-validator')
const checkValidatorResults = require('../libs/checkValidatorResults')

const { list: listProjects, get, create: createProject, remove } = require('../controllers/project')
const { list: listTasks, create: createTask } = require('../controllers/task')

const createProjectSchema = require('../schemas/createProject')
const createTaskSchema = require('../schemas/createTask')
const listTaskSchema = require('../schemas/listTask')
const deleteProjectSchema = require('../schemas/deleteProject')
const getProjectSchema = require('../schemas/getProject')

router.get('/', listProjects)

router.get('/:id', checkSchema(getProjectSchema), checkValidatorResults, get)

router.post('/', checkSchema(createProjectSchema), checkValidatorResults, createProject)

router.delete('/:id', checkSchema(deleteProjectSchema), checkValidatorResults, remove)

router.get('/:id/tasks', checkSchema(listTaskSchema), checkValidatorResults, listTasks)

router.post('/:id/tasks', checkSchema(createTaskSchema), checkValidatorResults, createTask)

module.exports = router
