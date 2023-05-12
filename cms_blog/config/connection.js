const { Sequelize } = require('sequelize');
require('dotenv').config();

const connection = new Sequelize(
    process.env.Store_db,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
   
    {
        host: 'localHost',
        dialect: 'mysql'
    }
);

module.exports = connection;