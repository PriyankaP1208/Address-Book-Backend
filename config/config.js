require('dotenv').config();
const mongoose = require('mongoose');

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
        process.exit();
    });

    return mongoose.connection;
}