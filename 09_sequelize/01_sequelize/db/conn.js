const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize2', 'root', 'P@ulo135', {
  host: 'localhost',
  dialect: 'mysql',
})

try {
  sequelize.authenticate()
  console.log('Conectamos com o Sequelize!')
} catch (error) {
  console.error('Não foi possível conectar:', error)
}

module.exports = sequelize