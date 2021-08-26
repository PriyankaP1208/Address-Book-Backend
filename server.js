const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./config/config');
require('dotenv').config()

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(express.json())

dbConfig.dbConnection();

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Address Book Application"});
});

require('./app/routes/route.js')(app);

// listen for requests
app.listen(3000, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});