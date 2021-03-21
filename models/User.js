const mongoose = require('mongoose')

const User = new mongoose.Schema({
    phone: {
        type: Number,
        required: true
    },
    zipCode: {
        type: Number
    },
    optIn: {
        type: Boolean,
        default: true
    },
    cities: [{
        type: String
    }]
})

module.exports = mongoose.model('user', User)