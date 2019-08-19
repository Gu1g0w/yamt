'use strict'
module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define('task', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    description: DataTypes.STRING,
    owner: DataTypes.STRING,
    completed: { type: DataTypes.BOOLEAN, defaultValue: false },
    dueDate: DataTypes.DATE
  }, {
    paranoid: true
  })
  task.associate = function (models) {
    models.task.belongsTo(models.project)
    // associations can be defined here
  }
  return task
}
