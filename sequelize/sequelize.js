const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const configPath = path.join(__dirname, '..', 'sequelize', 'config.json'); 
const configFile = fs.readFileSync(configPath, 'utf-8');
const config = JSON.parse(configFile)[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    database:config.database,
    host: config.host,
    dialect: config.dialect
  }
);

module.exports = sequelize;
