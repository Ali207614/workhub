const model = require('./model.js')
const { sign } = require('../../../lib/jwt.js')



const INSERT = async (req, res) => {
	try{
		let user = await model.insert( req.body )
		if(user) {
			res.status(201).json({
				message: "successfully completed" ,
				token: sign(user)
			})
		} else {
			res.status(404)
            .json({ message: "Error" });
		}
	}
	catch(err){
		console.log(err)
	}
}

const VALIDATE = async (req, res) => {
	try{
		let user = await model.validate( req.body )
		if(user) {
			res.status(302).json({
				message: "You have logged in successfully" ,
				token: sign(user)
			})
		} else {
			res.status(404)
            .json({ message: "You are not logged in, please try again!" });
		}
	}
	catch(err){
		console.log(err)
	}
}

module.exports = {
	INSERT,
	VALIDATE
}