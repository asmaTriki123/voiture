const mongoose = require('mongoose')
const voitureShyema = mongoose.Schema({
    marque:{
        type:String,
        required: false,
    },

    couleur:{
        type:String,
        required: false,
    },
      serie:{
        type:Number,
        required: false,
    },
})

const Voiture = mongoose.model('voiture',voitureShyema)
module.exports = Voiture