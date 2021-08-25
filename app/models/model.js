const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName:{
        type: String,
        require: true
    },
    lastName:{
        type:String,
        require:true
    },
    emailId:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
}, {
    timestamps: true,
    versionKey:false
});

const userModel = mongoose.model('User', UserSchema);

class UserRegistration{
    addUser=(userData, callback)=> {
        const user = new userModel({
            firstName: userData.firstName,
            lastName: userData.lastName,
            emailId: userData.emailId,
            password: userData.password
        });
        user.save((error, userData) => {
            return (error) ? callback(error, null) : callback(null, userData);
        });
    }
}

module.exports = new UserRegistration();