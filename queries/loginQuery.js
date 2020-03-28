const con = require('../connection');

// save signUp details
const signUpDetails = (username, phoneNo, email, password) => {
    console.log(username + phoneNo + email + password)
    return new Promise((resolve, reject) => {
        let sql = `insert into login_details values('${username}', '${phoneNo}', '${email}', '${password}');`;
        console.log(sql)
        con.connection.query(sql, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result)
        })
    })
}

// Login details check
const loginDetails = (username) => {
    console.log(username)
    return new Promise((resolve, reject) => {
        let sql = `select password from login_details where username='${username}'`;
        // console.log(sql)
        con.connection.query(sql, (err, result) => {
            if (err) {
                reject(err);
            }
            // console.log(result)
            resolve(result)
        })
    })
}

module.exports = {
    signUpDetails,
    loginDetails
}