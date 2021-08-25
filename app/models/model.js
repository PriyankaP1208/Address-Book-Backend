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
        require:true
    },
    password:{
        type:String,
        require:true
    }
}, {
    timestamps: true
});

const userModel = mongoose.model('User', UserSchema);