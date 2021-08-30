const contactController = require("../services/contact");
const validInput = require("../middleware/contact");

class ContactController {
	addContact(req, res){
		try {
			const userInputValidation = validInput.validate(req.body);
			if (userInputValidation.error) {
				return res.status(400).send({
					success: false,
					message: "Enter valid details",
					data: req.body,
				});
			}

			const contact = {
				firstName:req.body.firstName,
				lastName:req.body.lastName,
				emailId:req.body.emailId,
				address:req.body.address,
				city:req.body.city,
				state:req.body.state,
				phoneNo:req.body.phoneNo
			};

			contactController.addContact(contact, (err, userData) => {
				if (err) {
					return res.status(500).send({
						sucess:false,
						message: err.message || "Some error occurred"
					});
				}
				else
				{
					res.status(201).send({
						success:true,
						data:userData,
						message:"Contact Created Successfully"
					});
				}   
			});
		} catch (error) {
			return res.status(500).send({
				success:false,
				message:error.message || "Some error occured",
			});
		}
	}

	getAllContacts(req, res){
		contactController.getAllContacts((error, contactData) => {
			if(error){
				return res.status(500).send({
					success:false,
					message:"Some error occured",
				});
			}
			res.status(200).send({
				success:true,
				message:"Retrieved contacts successfully",
				data: contactData
			});
		});
	}

	getOneContact(req, res){
		const contactId = req.params.contactId;
		contactController.getContactById(contactId, (error,contactData) => {
			if(error)
			{
				return res.status(400).send({
					success:false,
					message:"Contact details not found"
				});
			}else {
				return res.status(200).send({
					success:true,
					message:"Retrieved contact details",
					data: contactData
				});
			}

		});
	}

	updateContact(req, res){
		const contactId=req.params.contactId;
		const updateContactDetails = {
			firstName:req.body.firstName,
			lastName:req.body.lastName,
			emailId:req.body.emailId,
			address:req.body.address,
			city:req.body.city,
			state:req.body.state,
			zip:req.body.zip,
			phoneNo:req.body.params
		};

		contactController.updateContact(contactId, updateContactDetails, (error, contactData) => {
			return error ? res.status(500).send({
				success:false,
				message:error.message
			}):
				res.status(200).send({
					success:true,
					message:"Updated contact successfully",
					data:contactData
				});
		});
	}catch(error){
		return(error);
	}

	removeContact(req, res){
		try{
			const contactId = req.params.contactId;
			contactController.reoveContact(contactId, (error, contactData) => {
				if(error){
					return res.status(500).send({
						success:false,
						message:"Contact not deleted"
					});
				}
				else {
					return res.status(200).send({
						success:true,
						message:"Deleted contact successfully",
						data:contactData
					});
				}
			});
		}catch(error){
			return(error);
		}
	}
}

module.exports = new ContactController();