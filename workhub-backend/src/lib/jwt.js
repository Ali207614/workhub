const jwt = require("jsonwebtoken");
const { secretKey } = require("../config.js");

module.exports = {
    sign: payload => jwt.sign(payload, secretKey),
    verify: token => jwt.verify(token, secretKey)
};