

const voiture = require('../models/voiture')

const ajoutervoiture = (req, res)=>{

const Voiture = new voiture(req.body)
Voiture.save().then((resultat)=>{
    res.status(201).json({
        model : resultat,
        message: "bien crée"
    })
})
.catch((err)=>{
    res.status(400).json({
        err: err.message
    })
})
}

const getvoiture = (req, res) =>{
    voiture.find().then((resultat)=>{
        res.status(200).json({
            model: resultat,
            messag:"tous sont récuperer"
        })

    })
    .catch((err)=>{
        res.status(400).json({
            messag:"X X X X X "
        })
    })
}

const getbyidvoiture = (req, res) =>{
    voiture.findOne({_id: req.params.id}).then((resultat)=>{
    
        if(!resultat){
            res.status(404).json({message: " nest pas trouver"})
            return
        }

        res.status(200).json({
            model: resultat,
            message: "trouvéeeee"
        })



    })
    .catch((err)=>{
        res.status(400).json({
          err: err.message  
        })
    })
}

const modifvoiture = (req, res) =>{
voiture.findOneAndUpdate({_id: req.params.id}, req.body , {new: true})
.then((resulat)=>{
    if(!resulat){
        res.status(404).json({
            message: "n'est pas trouver"
        })}
        res.status(200).json({
            model: resulat,
            message: "bien bien"
        })
    
})
.catch((err)=>{
    res.status(400).json({
        err: err.message
    })
})

}

const deltevoiture = (req, res)=>{
    voiture.findOneAndDelete({_id: req.params.id}).then((resultat)=>{
        if(!resultat){
            res.status(200).json({message: "pas exite"})  
            return
        }
        res.status(200).json({
        message: "bien supprimer"
        })

    })
    .catch((err)=>{
        res.status(200).json({
            err: err.message
        })
    })
}


module.exports = {
    ajoutervoiture: ajoutervoiture,
    getvoiture: getvoiture,
    getbyidvoiture: getbyidvoiture,
    modifvoiture: modifvoiture,
    deltevoiture: deltevoiture
}