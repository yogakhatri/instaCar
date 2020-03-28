const express = require('express');
const router = express.Router();
const LoginQuery = require('./queries/loginQuery')
const carAndDriver = require('./queries/carAndDriver')
const bodyParser = require('body-parser')
const RideDetails=require('./queries/saveRideDetails')

router.use(bodyParser.json())

// Posting signUp Details in login_details
router.post('/api/signUp', (req, res) => {
    console.log(req.body)
    LoginQuery.signUpDetails(req.body.username, req.body.phone_no, req.body.email, req.body.password)
        .then((result) => {
            if (result["affectedRows"] != 0) {
                res.send('Details Added Successfully')
            }
            else {
                res.status(422).json({ msg: "Invalid Details" })
            }
        })
})

// Getting loginDetails in login_details
router.get('/api/loginCheck', (req, res) => {
    console.log(req.body)
    LoginQuery.loginDetails(req.body.username, req.body.password)
        .then((result) => {
            console.log(result)
            if (result.length > 0) {
                res.send('Login Successful')
            }
            else {
                res.status(401).json({ msg: "Invalid Login Details" })
            }
        })
})

// Getting car Details
router.get('/api/bookRide', (req, res) => {
    // console.log(req.body)
    carAndDriver.getCarList()
        .then((result) => {
            console.log(result)
            if (result.length > 0) {
                res.send(result)
            }
            else {
                res.status(401).json({ msg: "Invalid Login Details" })
            }
        })
})

// Getting Driver Details
router.get('/api/bookRide/:carname', (req, res) => {
    console.log(req.body)
    carAndDriver.getDriversList(req.params.carname)
        .then((result) => {
            console.log(result)
            if (result.length > 0) {
                res.send(result)
            }
            else {
                res.status(400).json({ msg: "Bad Request" })
            }
        })
})

// Getting Driver Details
router.get('/api/bookRide/:carname/:language', (req, res) => {
    console.log(req.params.language + "---------------------------------")
    carAndDriver.filterDriversList(req.params.carname, req.params.language)
        .then((result) => {
            console.log(result)
            if (result.length > 0) {
                res.send(result)
            }
            else {
                res.status(400).json({ msg: "Bad Request" })
            }
        })
})

// Posting ride Details in ride_details
router.post('/api/rideDetails', (req, res) => {
    console.log(req.body)
    RideDetails.rideDetails(req.body.username, req.body.pickup_time, req.body.pickup_address)
        .then((result) => {
            if (result["affectedRows"] != 0) {
                res.send(result)
            }
            else {
                res.status(422).json({ msg: "Invalid Details" })
            }
        })
})

module.exports = router