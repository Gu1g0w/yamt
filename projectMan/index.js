require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const orm = require('./orm')

const { PORT } = require('./config')

app.use(bodyParser.json())
app.use(cors())

const { project } = require('./routes')

app.use('/projects', project)

orm.sequelize.authenticate()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}.`)
    })
  })
  .catch(err => {
    console.error('Application couldn\' start because there was a problem connecting to the Database.')
    console.error(err)
    process.exit(1)
  })
