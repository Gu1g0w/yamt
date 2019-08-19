'use strict'
module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('project', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    name: DataTypes.STRING
  }, {
    paranoid: true
  })
  project.associate = function (models) {
    models.project.hasMany(models.task)
    // associations can be defined here
  }
  return project
}
