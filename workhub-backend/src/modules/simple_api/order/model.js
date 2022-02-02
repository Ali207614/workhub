const { fetch, fetchAll } = require("../../../lib/connectdb.js")



const INSERT_ORDER = `
INSERT INTO orders (
    user_id,
    description_project
) VALUES ( $1,$2)
RETURNING *
`



const insertOrder = async ({ user_id , description_project }) => {
   try{
        let order = await fetch(INSERT_ORDER, user_id , description_project )
        return order
   }
   catch(err){
       console.log(err)
   }
}


module.exports =  {
    insertOrder
}
