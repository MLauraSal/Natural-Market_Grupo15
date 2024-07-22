const { Sequelize} = require('sequelize');

const sequelize = new Sequelize('marianasal123_db_naturalmarket', '366465_mls', 'catalogo2020', {
    host: 'mysql-marianasal123.alwaysdata.net',
    dialect: 'mysql',
    logging: false, // Desactiva el logging
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
