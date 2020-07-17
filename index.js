require("./db");

require("./model/feriados.model.js");

const express = require("express");

// TODO: move to .env
const API_PORT = 57016;

var app = express();

// Plugins
app.use(express.json()); // replaced body-parser

// Listener
app.listen(API_PORT, () => {
  console.log("Express avail at port:", API_PORT);
})