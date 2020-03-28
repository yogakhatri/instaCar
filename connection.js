var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'insta_car'
})

connection.connect((error => {
    if (error) {
        throw error;
    }
    console.log(`Database connected`)
}))

exports.connection = connection;