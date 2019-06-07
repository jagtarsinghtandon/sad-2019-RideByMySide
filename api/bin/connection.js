const Sequelize = require("sequelize");

const sequelize = new  Sequelize("ridebymyside","root","password", {host:"127.0.0.1", dialect: "mysql", 
operatorsAliases: false});
global.sequelize = sequelize;
module.export = sequelize;

