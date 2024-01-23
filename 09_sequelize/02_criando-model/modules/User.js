const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const user = db.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        require: true
    },
    newsletter: {
        type: DataTypes.BOOLEAN,
    }
})

module.exports = user