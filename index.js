require("./db");

require("./model/feriados.model");
var feriadosRoutes = require("./controllers/feriado.controller")

const express = require("express");
const cors = require('cors')

// TODO: move to .env
const API_PORT = 57016;
var app = express();

// Plugins
app.use(express.json()); // replaced body-parser

// CORS

// app.use(cors({origin:'http://localhost:3001'}))
// app.use(cors({origin:'http://192.168.1.53:3001'}))
app.use(cors())


// Listener
app.listen(API_PORT, () => {
  console.log("Express avail at port:", API_PORT);
})

// Routes
app.use('/feriados', feriadosRoutes)