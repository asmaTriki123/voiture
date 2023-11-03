
const user = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.ajouteruser =(req, res, next) =>{

bcrypt
.hash(req.body.motpasse, 10).then((hash)=>{
    const User = new user({email : req.body.email,  
        motpasse: hash})

        

    User.save().then((resultat)=>{
        const a = resultat.toObject();
    delete a.motpasse
        res.status(201).json({
            model : a,
            message: "bien crée"
        })
    })
    .catch((err)=>{
        res.status(201).json({err: err.message}) 
    })
})

}
  
exports.sigin = (req, res, next) =>{
    user.findOne({email: req.body.email}).then((resultat)=>{
        if(!resultat){
            res.status(401).json({
                message: "n'est pas trouver"
            })

        }

        bcrypt.compare(req.body.motpasse,resultat.motpasse).then((valide)=>{
            if(!valide){
                res.status(401).json({
                    message: "verifier mot de passe"
                }) 
            }
            res.status(401).json({
                token: jwt.sign({userId: user._id}, "RANDOM_TOKEN_SECRET",{
                    expiresIn: "24h",
                }),
            })
        })

    })
}