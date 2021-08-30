/*eslint-disable*/
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server.js");
const user = require("./user.json");

chai.should();
chai.use(chaiHttp);

describe("registerUser", ()=>{
	it("givenValidData_shouldRegisterSuccessfully", (done) => {
		const userData = user.userCreate;
		chai.request(server)
			.post("/registerUser")
			.send(userData)
			.end((error ,res) => {
				if(error){
					return done(error);
				}
				res.should.have.status(201);
				res.body.should.be.a("object");
				res.body.should.have.property("success").eql(true);
				res.body.should.have.property("message").eql("Registered Successfully");
				return done();
			});
	});

	it("givenInvalidFirstName_shouldFailToRegister", (done) => {
		const userData = user.userCreateFalseFirstName;
		chai.request(server)
			.post("/registerUser")
			.send(userData)
			.end((error ,res) => {
				if(error){
					return done(error);
				}
				res.should.have.status(400);
				res.body.should.be.a("object");
				res.body.should.have.property("success").eql(false);
				res.body.should.have.property("message").eql("Enter valid details");
				return done();
			});
	});

	it("givenInvalidLastName_shouldFailToRegister", (done) => {
		const userData = user.userCreateFalseLastName;
		chai.request(server)
			.post("/registerUser")
			.send(userData)
			.end((error ,res) => {
				if(error){
					return done(error);
				}
				res.should.have.status(400);
				res.body.should.be.a("object");
				res.body.should.have.property("success").eql(false);
				res.body.should.have.property("message").eql("Enter valid details");
				return done();
			});
	});

	it("givenInvalidEmailId_shouldFailToRegister", (done) => {
		const userData = user.userCreateFalseFirstName;
		chai.request(server)
			.post("/registerUser")
			.send(userData)
			.end((error ,res) => {
				if(error){
					return done(error);
				}
				res.should.have.status(400);
				res.body.should.be.a("object");
				res.body.should.have.property("success").eql(false);
				res.body.should.have.property("message").eql("Enter valid details");
				return done();
			});
	});

	it("givenInvalidPassword_shouldFailToRegister", (done) => {
		const userData = user.userCreateFalsePassword;
		chai.request(server)
			.post("/registerUser")
			.send(userData)
			.end((error ,res) => {
				if(error){
					return done(error);
				}
				res.should.have.status(400);
				res.body.should.be.a("object");
				res.body.should.have.property("success").eql(false);
				res.body.should.have.property("message").eql("Enter valid details");
				return done();
			});
	});
});

describe("loginUser", ()=>{
	it("givenValidData_shouldLoginSuccessfully", (done) => {
		const userData = user.userLogin;
		chai.request(server)
			.post("/loginUser")
			.send(userData)
			.end((error ,res) => {
				if(error){
					return done(error);
				}
				res.should.have.status(200);
				res.body.should.be.a("object");
				res.body.should.have.property("success").eql(true);
				res.body.should.have.property("message").eql("Login Successful");
				return done();
			});
	});

	it("givenInvalidEmailId_shouldFailToLogin", (done) => {
		const userData = user.loginFalseEmailId;
		chai.request(server)
			.post("/loginUser")
			.send(userData)
			.end((error ,res) => {
				if(error){
					return done(error);
				}
				res.should.have.status(400);
				res.body.should.be.a("object");
				res.body.should.have.property("success").eql(false);
				res.body.should.have.property("message").eql("User doesn't exist");
				return done();
			});
	});
});

describe("Address Book API", () => {
	let token = " ";
  
	beforeEach((done) => {
	  const userData = user.userLogin;
	  chai
		.request(server)
		.post('/loginUser')
		.send(userData)
		.end((error, res) => {
		  token = res.body.token;
		  res.should.have.status(200);
		  if (error) return done(error)
		  done();
		});
	});

	describe("Add Contact", ()=> {
		it("givenDataIsValid_shouldCreateNewContact", (done) => {
		  const userData = user.createContact;
		  chai.request(server)
		    .post("/addContact")
		    .send(userData)
		    .set('token', token )
		    .end((error, res) => {
		      res.should.have.status(201);
		      res.body.should.have.property('success').eql(true);
		      res.body.should.have.property('message').eql('Contact Created Successfully');
		      res.body.should.have.property('data');
		      done();
		    });
		});
	})

	it("givenFirstNameIsInValid_shouldFailToCreateContact", (done) => {
		const userData = user.falseFirstName;
		chai.request(server)
		  .post("/addContact")
		  .send(userData)
		  .set('token', token )
		  .end((error, res) => {
			res.should.have.status(400);
			res.body.should.have.property('success').eql(false);
			res.body.should.have.property('message').eql('Enter valid details');
			res.body.should.have.property('data');
			done();
		});
	});

	it("givenLastNameIsInValid_shouldFailToCreateNewContact", (done) => {
		const userData = user.falseLastName;
		chai.request(server)
		  .post("/addContact")
		  .send(userData)
		  .set('token', token )
		  .end((error, res) => {
			res.should.have.status(400);
			res.body.should.have.property('success').eql(false);
			res.body.should.have.property('message').eql('Enter valid details');
			res.body.should.have.property('data');
			done();
		});
	});

	it("givenEmailIdIsInValid_shouldFailToCreateNewContact", (done) => {
		const userData = user.falseEmailId;
		chai.request(server)
		  .post("/addContact")
		  .send(userData)
		  .set('token', token )
		  .end((error, res) => {
			res.should.have.status(400);
			res.body.should.have.property('success').eql(false);
			res.body.should.have.property('message').eql('Enter valid details');
			res.body.should.have.property('data');
			done();
		});
	});

	it("givenAddressIsInValid_shouldFailToCreateNewContact", (done) => {
		const userData = user.falseAddress;
		chai.request(server)
		  .post("/addContact")
		  .send(userData)
		  .set('token', token )
		  .end((error, res) => {
			res.should.have.status(400);
			res.body.should.have.property('success').eql(false);
			res.body.should.have.property('message').eql('Enter valid details');
			res.body.should.have.property('data');
			done();
		});
	});

	it("givenZipIsInValid_shouldFailToCreateNewContact", (done) => {
		const userData = user.falseZip;
		chai.request(server)
		  .post("/addContact")
		  .send(userData)
		  .set('token', token )
		  .end((error, res) => {
			res.should.have.status(400);
			res.body.should.have.property('success').eql(false);
			res.body.should.have.property('message').eql('Enter valid details');
			res.body.should.have.property('data');
			done();
		});
	});

	it("givenPhoneNoIsInValid_shouldFailToCreateNewContact", (done) => {
		const userData = user.falsePhoneNo;
		chai.request(server)
		  .post("/addContact")
		  .send(userData)
		  .set('token', token )
		  .end((error, res) => {
			res.should.have.status(400);
			res.body.should.have.property('success').eql(false);
			res.body.should.have.property('message').eql('Enter valid details');
			res.body.should.have.property('data');
			done();
		});
	});

	it("givenNameIsNull_shouldFailToCreateNewContact", (done) => {
		const userData = user.noName;
		chai.request(server)
		  .post("/addContact")
		  .send(userData)
		  .set('token', token )
		  .end((error, res) => {
			res.should.have.status(400);
			res.body.should.have.property('success').eql(false);
			res.body.should.have.property('message').eql('Enter valid details');
			res.body.should.have.property('data');
			done();
		});
	});

	it("givenPhoneNoIsNull_shouldFailToCreateNewContact", (done) => {
		const userData = user.noPhoneNo;
		chai.request(server)
		  .post("/addContact")
		  .send(userData)
		  .set('token', token )
		  .end((error, res) => {
			res.should.have.status(400);
			res.body.should.have.property('success').eql(false);
			res.body.should.have.property('message').eql('Enter valid details');
			res.body.should.have.property('data');
			done();
		});
	});

	it("givenEmailIdIsNull_shouldFailToCreateNewContact", (done) => {
		const userData = user.noEmailId;
		chai.request(server)
		  .post("/addContact")
		  .send(userData)
		  .set('token', token )
		  .end((error, res) => {
			res.should.have.status(400);
			res.body.should.have.property('success').eql(false);
			res.body.should.have.property('message').eql('Enter valid details');
			res.body.should.have.property('data');
			done();
		});
	});
	  
	describe("Retrieve Data", () => {
		it("givenValidRequest_shouldRetrieveAllContacts", (done) => {
	  	chai.request(server)
			.get("/getContacts")
			.set('token', token )
			.end((error, res) => {
		  		res.should.have.status(200);
		  		res.body.should.have.property('success').eql(true);
		  		res.body.should.have.property('message').eql('Retrieved contacts successfully');
		  		res.body.should.have.property('data');
		  	done();
		});
	});

	it("givenInvalidRequest_shouldFailTo_retrieveAllContacts", (done) => {
		chai.request(server)
		  .get("/getContact")
		  .set('token', token )
		  .end((error, res) => {
			res.should.have.status(404);
			done();
		  });
	  	});
	});

	describe("Retrieve One Data", () => {
    it("givenValidId_shouldRetrieveOneContact", (done) => {
      const id = user.getContactById.id;
      chai.request(server)
        .get("/getContacts/" + id)
        .set('token', token )
        .end((error, res) => {
			res.should.have.status(200);
          	res.body.should.have.property('success').eql(true);
          	res.body.should.have.property('message').eql('Retrieved contact details');
          	res.body.should.have.property('data');
          	done();
        	});
    	});
	});

	it("givenInValidId_shouldFailTo_retrieveOneContactDetails", (done) => {
		const id = user.getWrongContactId.id;
		chai.request(server)
			.get("/getContacts/" + id)
		  	.set('token', token )
		  	.end((error, res) => {
				res.should.have.status(400);
			done();
		});
	});

	describe("UpdateContact", () => {
		it("givenValidId_shouldUpdateContact", (done) => {
		  const id = user.updateContactDetails.id;
		  chai.request(server)
			.put("/updateContact/" + id)
			.set('token', token )
			.end((error, res) => {
			  res.should.have.status(200);
			  res.body.should.have.property('success').eql(true);
			  res.body.should.have.property('message').eql('Updated contact successfully');
			  res.body.should.have.property('data');
			  done();
			});
		});

		it("givenInvalidId_shouldFailTo_UdateContactData", (done) => {
			const id = user.updateWrongId.id;
			chai.request(server)
		  		.put("/updateContact/" + id)
		  		.set('token', token )
		  		.end((error, res) => {
					res.should.have.status(500);
				done();
			});
	  	});
	})

	describe("DeleteContact", () => {
		it("givenValidId_shouldDeleteContactDetails", (done) => {
		  const id = user.deleteContact.id;
		  chai.request(server)
			.delete("/deleteContact/" + id)
			.set('token', token )
			.end((error, res) => {
			  res.should.have.status(200);
			  res.body.should.have.property('success').eql(true);
			  res.body.should.have.property('message').eql('Deleted contact successfully');
			  res.body.should.have.property('data');
			  done();
			});
		});
	})
});