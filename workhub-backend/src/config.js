const pgConfig = {
	host: 'localhost',
	port: 5432,
	user:'postgres',
	password: '010203',
	database: 'workhub'
}


module.exports = {
    PORT: process.env.PORT,
    pgConfig,
    secretKey: process.env.SECRET_KEY
}