const mongoose = require('mongoose')

const Testing = new mongoose.Schema({
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
    }],
    lastCheck:{type:Number},
    notified: Boolean
    
}, {collection: 'testing'})

module.exports = mongoose.model('testing', Testing)