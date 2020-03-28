const con = require('../connection');

// Get Car List
const getCarList = () => {
    return new Promise((resolve, reject) => {
        let sql = `select carname from car_and_driver`;
        console.log(sql)
        con.connection.query(sql, (err, result) => {
            if (err) {
                reject(err);
            }
            console.log(result)
            resolve(result)
        })
    })
}

// get Driver List
const getDriversList = (carname) => {
    console.log(carname)
    return new Promise((resolve, reject) => {
        let sql = `select drivername from driver_and_language where carname='${carname}'`;
        console.log(sql)
        con.connection.query(sql, (err, result) => {
            if (err) {
                reject(err);
            }
            console.log(result)
            resolve(result)
        })
    })
}

// Filter driver details by language
const filterDriversList = (carname,language) => {
    console.log(carname)
    return new Promise((resolve, reject) => {
        let sql = `select x.drivername from driver_and_language as x inner join car_and_driver as y on y.drivername=x.drivername where carname='${carname}' AND language='${language}'`;
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
    getCarList,
    getDriversList,
    filterDriversList
}