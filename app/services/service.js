const userService = require('../models/model.js');

class UserService {
    registerUser = (userData, callback) => {
        userService.addUser(userData, (error, data) => {
            return (error) ? callback(error, null) : callback(null, data);
        });
    }
}
module.exports = new UserService();