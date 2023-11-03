const mongoose = require('mongoose')

const userSyma = mongoose.Schema({
    email:{
        type: String,
        required : true
    },
    motpasse:{
        type: String,
        required : true
    }
})

const User = mongoose.model('user', userSyma)
module.exports = User