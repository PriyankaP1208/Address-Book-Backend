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

class UserRegistrationAndLogin{
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

    userLogin(loginDetails, callback){
		userModel.findOne({emailId: loginDetails.emailId}, (error, data) => {
			if(error) {
				return callback(error, null);
			} else if (!data) {
				return callback ("User doesn't exist", null);
			}
			else
			{
				return callback(null, data);
			}
		});
	}
}

module.exports = new UserRegistrationAndLogin();