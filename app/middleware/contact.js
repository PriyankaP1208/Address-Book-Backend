const Joi = require("joi");

const userValidation = Joi.object({
	firstName: Joi.string()
		.pattern(new RegExp("^[A-Z]{1,}[a-z]{2,10}$"))
		.required(),
	lastName: Joi.string()
		.pattern(new RegExp("^[A-Z]{1,}[a-z]{2,10}$"))
		.required(),
	emailId: Joi.string()
		.pattern(new RegExp("^[a-zA-Z0-9]+([+_.-][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?"))
		.required(),
	address: Joi.string()
		.pattern(new RegExp("^[A-Z]{1}[a-z]{2,} [A-Z]{1}[a-z]{2,}$"))
		.required(),
	city: Joi.string()
		.pattern(new RegExp("^[A-Z]{1}[a-z]{2,}$"))
		.required(),
	state: Joi.string()
		.pattern(new RegExp("^[A-Z]{1}[a-z]{2,}$"))
		.required(),
	zip: Joi.string()
		.pattern(new RegExp("^[0-9]{6}$"))
		.required(),
	phoneNo: Joi.string()
		.pattern(new RegExp("^[0-9]{10}$"))
		.required(),
});

module.exports = userValidation;