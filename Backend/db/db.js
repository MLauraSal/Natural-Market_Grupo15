const { Sequelize} = require('sequelize');

const sequelize = new Sequelize('db_naturalmarket', 'root', 'root', {
    host: 'localhost',
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
