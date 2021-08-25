const Joi = require('joi');

const userValidation = Joi.object({
  firstName: Joi.string()
    .min(2)
    .max(30)
    .pattern(new RegExp("^[A-Z]{1,}[a-z]{2,10}$"))
    .required(),
  lastName: Joi.string()
    .min(2)
    .max(30)
    .pattern(new RegExp("^[A-Z]{1,}[a-z]{2,10}$"))
    .required(),
  emailId: Joi.string()
    .min(5)
    .max(20)
    .pattern(new RegExp("^[a-zA-Z0-9]+([+_.-][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?"))
    .required(),
  password: Joi.string()
    .min(8)
    .max(20)
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).{8,32}$"))
    .required(),
});

module.exports = userValidation;