module.exports = (app) => {
	const user = require("../controller/controller.js");
	const contact = require("../controller/contact");
	const helper = require("../middleware/helper");

	app.post("/registerUser", user.registerUser);

	app.post("/loginUser", user.loginUser);

	app.post("/addContact", helper.verifyToken, contact.addContact);

	app.get("/getContacts", helper.verifyToken, contact.getAllContacts);

	app.get("/getContacts/:contactId", helper.verifyToken, contact.getOneContact);

	app.put("/updateContact/:contactId", helper.verifyToken, contact.updateContact);

	app.delete("/deleteContact/:contactId", helper.verifyToken, contact.removeContact);
};