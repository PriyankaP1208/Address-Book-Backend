const express = require('express');
const dbConfig = require('./config/config');
require('dotenv').config()
const logger = require('./config/loggers');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');


// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(express.json())

app.use(
    '/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument)
  );


dbConfig.dbConnection();

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Address Book Application"});
    logger.info('Welcome to Address Book Application');
});

require('./app/routes/route.js')(app);

// listen for requests
app.listen(3000, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
    logger.info('server is running on port 3000');
});

module.exports = app;