const contactService = require("../models/contact");

class ContactService {
	addContact(contactDetails, callback){
		contactService.addContact(contactDetails, (error, data) => {
			return (error) ? callback(error, null) : callback(null, data);
		});
	}

	getAllContacts(callback){
		contactService.getAllContacts((error, data) => {
			return error ? callback(error, null) : callback(null, data);
		});
	}

	getContactById(contactId, callback){
		contactService.getOneContact(contactId, (error, contactData) => {
			return error ? callback(error, null) : callback(null, contactData);
		});
	}

	updateContact(contactId, contactDetails, callback){
		try{
			contactService.updateContact(contactId, contactDetails, (error, data) => {
				if(error){
					return callback(error, null);
				}
				else{
					return callback(null, data);
				}
			});
		}catch(error){
			return callback(error, null);
		}
	}

	reoveContact(contactId, callback){
		try {
			contactService.removeContact(contactId, (error, data) => {
				if(!contactId){
					return callback(error, null);
				}
				else{
					return callback(null, data);
				}
			});
		}catch(error) {
			return callback(error, null);
		}
	}
}

module.exports = new ContactService();