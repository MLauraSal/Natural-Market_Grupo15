const { Sequelize} = require('sequelize');

const sequelize = new Sequelize('naturalmarket_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, // Desactiva el logging
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
