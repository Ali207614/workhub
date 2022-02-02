const authRouter = require('./auth')
const contactRouter = require('./contact')
const orderRouter = require('./order')
module.exports = [
    authRouter,
    orderRouter,
    contactRouter
]