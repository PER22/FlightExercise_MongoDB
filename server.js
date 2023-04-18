require('dotenv').config()
const express = require('express')
const app = express()
// imports
const flightsRouter = require('./routes/flightsRouter')
const destinationsRouter = require("./routes/destinationsRouter");
const logger = require('morgan') //debugger assistant
require('./config/database-connect') //
// 4 types of requests: GET, POST, PUT, DELETE
// ?_method=delete POST => DELETE
// ?_method=put POST => PUT
const methodOverride = require('method-override')
app.set('view engine', 'ejs') // Tell express we want to render EJS templates
// MIDDLEWARE SECTION
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next)=>{
    if(req.method.toLowerCase() === "post"){
        console.log(req.body)
    }
    next();
})
// Console.logs useful stuff about incoming requests
app.use(logger('dev'));
// Transforms request methods when we want to
app.use(methodOverride('_method'));
// Gives us form data as req.body
app.use(express.urlencoded({ extended: false }));

// IF a request URL starts with /flights, send the rest to flightsRouter
app.use('/flights', flightsRouter);
app.use('/', destinationsRouter);



app.listen('3000', ()=>{
    console.log("express is running...")
})

