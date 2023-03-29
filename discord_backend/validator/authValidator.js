const Joi = require('joi');
exports.registerSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    mail: Joi.string().email().required(),
    password: Joi.string().min(6).max(12).required(),
});

exports.loginSchema = Joi.object({
    mail: Joi.string().email().required(),
    password: Joi.string().min(6).max(12).required(),
})