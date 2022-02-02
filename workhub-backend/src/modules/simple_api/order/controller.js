const model = require('./model.js')



const INSERT_ORDER = async (req, res) => {
	try{
		let order = await model.insertOrder( req.body )
		console.log(order)
		if(order) {
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
	INSERT_ORDER
}