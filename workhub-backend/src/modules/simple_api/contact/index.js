const router = require('express').Router()
const { INSERT_CONTACT} = require('./controller.js')
const { validateContact } = require("../../../middlewares/validate");

router.post("/api/contact", validateContact, INSERT_CONTACT);

module.exports = router