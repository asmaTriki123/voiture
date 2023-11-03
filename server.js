
const http = require('http');
const app = require('./app')
const express = require('express')
const port = process.env.PORT || 3000
app.set('port',port)

const server = http.createServer(app)


server.listen(port, ()=>{
    console.log('je suis en ecoute')
})