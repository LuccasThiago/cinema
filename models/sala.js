const Sequelize = require('sequelize')

const database = require('../dbconfig/db')

const sala = database.define('sala',{
    idsala:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    capacidade: Sequelize.INTEGER

})

module.exports = sala 