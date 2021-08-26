const jwt = require('jsonwebtoken');

exports.generateAccessToken=(data)=>{
        return jwt.sign(data, process.env.TOKEN_SECRET);
}