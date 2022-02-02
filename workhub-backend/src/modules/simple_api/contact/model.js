const { fetch, fetchAll } = require("../../../lib/connectdb.js")



const INSERT_CONTACT = `
INSERT INTO contact (
    tel_number
) VALUES ( $1)
RETURNING *
`



const insertContact = async ({ tel_number }) => {
   try{
        let phone = await fetch(INSERT_CONTACT, tel_number )
        return phone
   }
   catch(err){
       console.log(err)
   }
}


module.exports =  {
    insertContact
}
