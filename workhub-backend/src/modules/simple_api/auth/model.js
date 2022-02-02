const { fetch, fetchAll } = require("../../../lib/connectdb.js")



const SELECT_USER_ID = `
select id from users;
`

const INSERT = `
INSERT INTO users (
    username,
    tel_number,
    password
) VALUES ( $1,$2, crypt($3, gen_salt('bf')) )
RETURNING *
`

const VALIDATE = `
    SELECT 
        id
    FROM users 
    WHERE tel_number = $1 AND
    password = crypt($2, password)
`

const select_user_id = async () => {
    try{
         let user = await fetchAll(SELECT_USER_ID)
         return user
    }
    catch(err){
        console.log(err)
    }
 }

const insert = async ({username, tel_number , password }) => {
   try{
        let user = await fetch(INSERT, username,  tel_number, password  )
        return user
   }
   catch(err){
       console.log(err)
   }
}

const validate = async ({tel_number , password }) => {
    try{
         let user = await fetch(VALIDATE,  tel_number, password  )
         return user
    }
    catch(err){
        console.log(err)
    }
 }

module.exports =  {
    insert,
    validate,
    select_user_id
}
