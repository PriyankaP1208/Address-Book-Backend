require('dotenv').config();
const mongoose = require('mongoose');
const logger = require('../config/loggers')

exports.dbConnection = ()=> {
    mongoose.Promise = global.Promise;

    const url = process.env.URL;

    // Connecting to the database
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    }).then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        logger.error('Could not connect to the database');
        process.exit();
    });

    return mongoose.connection;
}