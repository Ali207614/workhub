const router = require('express').Router()
const { INSERT , VALIDATE } = require('./controller.js')
const { validateRegister , validateLogin} = require("../../../middlewares/validate");

router.post("/register", validateRegister, INSERT);
router.post("/login", validateLogin, VALIDATE);

module.exports = router