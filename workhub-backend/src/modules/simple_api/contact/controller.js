const model = require('./model.js')
const { sign } = require('../../../lib/jwt.js')



const INSERT_CONTACT = async (req, res) => {
	try{
		let phone = await model.insertContact( req.body )
		if(phone) {
			res.status(201).json({
				message: "successfully completed" ,
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


module.exports = {
	INSERT_CONTACT
}