const express = require('express');
var route = express.Router();

var {
  Feriado
} = require('../model/feriados.model');

route.get('/', (req, res) => {
  Feriado.find((err, doc) => {
    if (err) {
      console.error("Failed getting / (all)", JSON.stringify(err, undefined, 2));
    } else {
      console.log("Done getting / (all)", JSON.stringify(doc, undefined, 2));
      res.send(doc)
    }
  })
})

module.exports = route;
