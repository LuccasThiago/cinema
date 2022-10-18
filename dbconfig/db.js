const Sequelize = require('sequelize')

const database = new Sequelize('cinema','root','',{
    dialect:'mysql',
    host: 'localhost',
    port: 3307
});

module.exports=database
