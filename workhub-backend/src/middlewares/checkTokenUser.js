const { verify } = require("../lib/jwt.js");
const { secretKey } = require("../config.js");
const model = require("../modules/simple_api/auth/model.js");

exports.checkTokenUser = async (req, res, next) => {
    const token = req.headers.token;
    if(!token) {
        res.status(401)
            .json({ message: "You are not logged in, please try again!" });
    } else {
        try {
            const payload = verify(token, secretKey);
            const user = await model.select_user_id();
            let checkUser = user.find(item => item.id == payload.id)
            if(checkUser) {
                next();
            } else {
                res.status(401)
                    .json({ message: "You are not logged in, please try again!" });
            }
        } catch(error) {
            res.status(401)
                .json({ message: "Invalid token. Please, log in again!" });
            throw error;
        };
    };
};