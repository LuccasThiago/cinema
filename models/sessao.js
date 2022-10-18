const Sequelize = require('sequelize')

const database = require('../dbconfig/db')

const sessao = database.define('sessao',{
    idsessao:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    titulo: Sequelize.STRING,

    horario:Sequelize.TIME,

    ing_vendidos:Sequelize.INTEGER,

    valor_ingresso:Sequelize.DECIMAL(5,2),

    ing_restantes:Sequelize.INTEGER,

    id_sala:Sequelize.INTEGER,

    duracao:Sequelize.DECIMAL(5,2),

    sinopse:Sequelize.STRING



})