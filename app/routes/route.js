module.exports = (app) => {
    const user = require('../controller/controller.js');

    app.post('/registerUser', user.registerUser);

    app.post('/loginUser', user.loginUser);
}