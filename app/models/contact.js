const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const ContactSchema = mongoose.Schema({
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
    address:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    zip:{
        type:String,
        require:true
    },
    phoneNo:{
        type:String,
        require:true
    }
}, {
    timestamps: true
});

const contact = mongoose.model('Contact', ContactSchema);

class Contacts{
    addContact=(contactDetails, callback)=> {
        const contacts = new contact({
				firstName: contactDetails.firstName,
				lastName: contactDetails.lastName,
				emailId: contactDetails.emailId,
				address:contactDetails.address,
                city:contactDetails.city,
                state:contactDetails.state,
                zip:contactDetails.zip,
                phoneNo:contactDetails.phoneNo
			});
			contacts.save({}, (error, contactDetails) => {
				return (error) ? callback(error, null) : callback(null, contactDetails);
			});
    }

    getAllContacts(callback){
		contact.find({}, (error, data) => {
			return error ? callback(error, null) : callback(null,data);
		});
	}

    getOneContact(contactId, callback){
		contact.findById(contactId, (error, data) => {
			return error ? callback(error, null) : callback(null, data);
		});
	}

    updateContact(contactId, contactDetails, callback){
		try{
			contact.findByIdAndUpdate(contactId, {
				firstName:contactDetails.firstName,
				lastName:contactDetails.lastName,
				emailId:contactDetails.emailId,
				address:contactDetails.address,
                city:contactDetails.city,
                state:contactDetails.state,
                zip:contactDetails.zip,
                phoneNo:contactDetails.phoneNo
			},{new:true},(error, data) =>{
				return error ? callback(error, null) : callback(null, data);
			});
		}catch(error){
			return callback(error, null);
		}
	}

    removeContact(contactId, callback){
		try{
			contact.findByIdAndRemove(contactId, (err, data) => {
				return err ? callback(err, null) : callback(null, data);
			});
		}catch(err){
			callback(err, null);
		}
	}
}

module.exports = new Contacts();