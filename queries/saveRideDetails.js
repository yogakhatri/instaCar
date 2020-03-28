const con = require('../connection');

// save signUp details
const rideDetails = (username, pickUpTime, pickUpAddress) => {
    console.log(username + pickUpTime + pickUpAddress)
    return new Promise((resolve, reject) => {
        let sql = `insert into ride_details values('${username}', '${pickUpTime}', '${pickUpAddress}');`;
        console.log(sql)
        con.connection.query(sql, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result)
        })
    })
}

module.exports = {
    rideDetails
}