module.exports = (app) => {
    const user = require('../controller/controller.js');
    const contact = require('../controller/contact');

    app.post('/registerUser', user.registerUser);

    app.post('/loginUser', user.loginUser);

    app.post('/addContact', contact.addContact);

    app.get('/getContacts', contact.getAllContacts);

    app.get('/getContacts/:contactId', contact.getOneContact);

    app.put('/updateContact/:contactId', contact.updateContact);

    app.delete('/deleteContact/:contactId', contact.removeContact);
}