const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize2', 'root', 'P@ulo135', {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = sequelize