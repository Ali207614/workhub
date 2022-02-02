const router = require('express').Router()
const { INSERT_ORDER} = require('./controller.js')
const { validateOrder } = require("../../../middlewares/validate");
const { checkTokenUser } = require("../../../middlewares/checkTokenUser.js");

router.post("/api/order", checkTokenUser, validateOrder, INSERT_ORDER);

module.exports = router