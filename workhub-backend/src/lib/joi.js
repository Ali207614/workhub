const { not } = require("joi");
const Joi = require("joi");

exports.contactSchema = Joi.object().keys({
    tel_number: Joi.string().length(9).pattern(/^[0-9]+$/).required()
})

exports.loginSchema = Joi.object({
    tel_number: Joi.string().length(9).pattern(/^[0-9]+$/).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
});

exports.orderSchema = Joi.object({
    description_project: Joi.string().min(2).max(365).required()
});

exports.registerSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    tel_number: Joi.string().length(9).pattern(/^[0-9]+$/).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
});