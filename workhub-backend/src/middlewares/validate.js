const { 
    loginSchema,
    contactSchema,
    registerSchema,
    orderSchema
} = require("../lib/joi");



exports.validateContact = (req,res,next) => {
    const data = contactSchema.validate(req.body);
    if(data.error) {
        res.status(403)
        .json({ message: data.error.details[0].message });
    } else {
        next();
    };
}

exports.validateOrder = (req,res,next) => {
    const { user_id ,description_project } = req.body
    const data = orderSchema.validate({description_project});
    if(data.error) {
        res.status(403)
        .json({ message: data.error.details[0].message });
    } else {
        next();
    };
}


exports.validateLogin = (req, res, next) => {
    const data = loginSchema.validate(req.body);
    if(data.error) {
        res.status(403)
        .json({ message: data.error.details[0].message });
    } else {
        next();
    };
};


exports.validateRegister = (req, res, next) => {
    const data = registerSchema.validate(req.body);
    if(data.error) {
        res.status(403)
        .json({ message: data.error.details[0].message });
    } else {
        next();
    };
};