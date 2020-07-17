const express = require('express');
var route = express.Router();
var ObjId = require('mongoose').Types.ObjectId;

var {
  Feriado
} = require('../model/feriados.model');


route.get('/', (req, res) => {
  Feriado.find((err, doc) => {
    if (err) {
      msg = ("Failed getting / (all)", JSON.stringify(err, undefined, 2));
      console.error(msg);
      // NOTE:
      return res.status(400).send(msg);
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
      const msg = ("Failed saving / (doc)", JSON.stringify(err, undefined, 2));
      console.error(msg);
      // NOTE:
      return res.status(400).send(msg);
    } else {
      console.log("Done saving / (doc)", JSON.stringify(doc, undefined, 2));
      res.send(doc)
    }
  })
})


route.put('/:id', (req, res) => {
  // NOTE: refactor using recId
  const recId = req.params.id;
  if (!ObjId.isValid(recId)) {
    const msg = ("Failed update due to invalid id:", recId);
    console.error(msg);
    return res.status(400).send(msg);
  } else {
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
    };

    Feriado.findByIdAndUpdate(recId, {
      $set: updatedRecord
    }, (err, doc) => {
      if (err) {
        const msg = ("Failed update for id:", recId, JSON.stringify(err, undefined, 2));
        console.error(msg);
        return res.status(400).send(msg);
      } else {
        console.log("Done update for id", JSON.stringify(rec, undefined, 2));
        res.send(doc)
      }
    })
  }
})



route.delete('/:id', (req, res) => {
  // NOTE: refactor using recId
  const recId = req.params.id;
  if (!ObjId.isValid(recId)) {
    const msg = ("Failed delete due to invalid id:", recId);
    console.error(msg);
    return res.status(400).send(msg);
  } else {
    Feriado.findByIdAndRemove(recId, (err, doc) => {
      if (err) {
        const msg = ("Failed delete for id:", recId, JSON.stringify(err, undefined, 2));
        console.error(msg);
        return res.status(400).send(msg);
      } else {
        console.log("Done delete for id", JSON.stringify(rec, undefined, 2));
        res.send(doc)
      }
    })


  }


})

module.exports = route;