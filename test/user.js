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