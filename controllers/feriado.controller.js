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

route.post('/', (req, res) => {
  var rec = {
    motivo: req.body.motivo,
    tipo: req.body.tipo,
    dia: req.body.dia,
    mes: req.body.mes,
    id: req.body.id,
    // TODO:  optional fields
    original: req.body.original,
    opcional: req.body.opcional,
    religion: req.body.religion,
    origen: req.body.origen,

  }
  Feriado.save((err, doc) => {
    if (err) {
      console.error("Failed saving / (doc)", JSON.stringify(err, undefined, 2));
    } else {
      console.log("Done saving / (doc)", JSON.stringify(doc, undefined, 2));
      res.send(doc)
    }
  })
})

module.exports = route;