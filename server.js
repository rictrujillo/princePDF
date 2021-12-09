const rutas = require('./routes/routes')
const express = require('express')
const PORT = process.env.PORT || 8080;
const app = express()
const cors = require('cors');

app.use(express.json({limit: '50mb'}));
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));
app.use(express.urlencoded({
  extended: true
}));

//Routing with express
rutas(app)
//enable server
const server = app.listen( PORT, (error)=>{
    if(error) return console.log(`error: ${error}`)
    console.log(`Servidor escuchando en el puerto ${ server.address().port }`)
})

