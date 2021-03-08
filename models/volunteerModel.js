const mongoose = require('mongoose');

const volunteerSchema = {
    name: String,
    email: String,
    pan:String,
    aadhar:String,
    mobile:Number,
    occupation:String
}

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;