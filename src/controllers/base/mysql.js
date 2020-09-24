const { mysql } = require("../../../config/config");

const {mysql} = require('../../../config/config');

let database = mysql.database;
let username = mysql.user;
let password = mysql.password;
let host

const sequelize = new Sequelize(database, username, password, {
    host: 'localhost',
    dialect: 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

   storage: 'path/to/database.sqlite' // Chỉ dùng khi MS là SQLite
});