const express = require("express");
const router = express.Router();
const Volunteer = require("../models/volunteerModel");


// 
router.route("/add-user").post((req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const pan = req.body.pan;
    const aadhar = req.body.aadhar;
    const mobile = req.body.mobile;
    const occupation = req.body.occupation;
    console.log(name,email,pan,aadhar,mobile,occupation);

    const newVolunteer = new Volunteer({
        name,
        email,
        pan,
        aadhar,
        mobile,
        occupation
    });
    newVolunteer.save();
})

router.route("/show-volunteers").get((req,res)=>{
    Volunteer.find()
    .then(foundVolunteer => res.json(foundVolunteer))
})

module.exports = router;