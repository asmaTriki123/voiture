const mongoose = require('mongoose')
const express = require('express')
const app= express();
 const router = require('./routers/voiture') 
 const routerr = require('./routers/user')
app.use(express.json())



mongoose.connect('mongodb://0.0.0.0:27017/voiture'
,{useNewUrlParser: true, useUnifiedTopology:true}

)
        .then(()=>{console.log("connexion valider");})
        .catch(()=>{console.log("connexion invalide");})


app.use('/voiture/api',router)
app.use('/api/user',routerr)
module.exports= app;