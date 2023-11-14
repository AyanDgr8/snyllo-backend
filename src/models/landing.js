// src/models/landing.js

const mongoose = require('mongoose');

const landingSchema = mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, unique: true, required: true },
    treatment: { type: String, required: true },
    location: { type: String, required: true }
});


const UserDetails = mongoose.model("UserDetails", landingSchema)

module.exports = UserDetails;     