const mongoose = require('mongoose')

module.exports = mongoose.model('User', new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        default: ''
    },
    lastName: {
        type: String,
        trim: true,
        default: ''
    },
    email: {
        type: String,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now
    }
}))
