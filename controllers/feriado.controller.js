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
      return res.status(400).send(msg);
    } else {
      console.log("Done getting / (all)", JSON.stringify(doc, undefined, 2));
      res.send(doc)
    }
  })
})


route.post('/', (req, res) => {
  console.log("POST body", req.body);
  var rec = new Feriado({
    motivo: req.body.motivo,
    tipo: req.body.tipo,
    dia: req.body.dia,
    mes: req.body.mes,
    id: req.body.id,
    // NOTE:  optional fields
    original: req.body.original,
    opcional: req.body.opcional,
    religion: req.body.religion,
    origen: req.body.origen,
  });

  rec.save((err, doc) => {
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

// NOTE: for initial preload passing Feriado[] : Not in use
route.post('/many', (req, res) => {
  console.log("POST body", req.body);
  var recs = req.body;
  // NOTE: take a look at the structure from "Record.md"

  Feriado.insertMany(recs, (err, doc) => {
    if (err) {
      const msg = ("Failed Multisaving / (doc)", JSON.stringify(err, undefined, 2));
      console.error(msg);
      // NOTE:
      return res.status(400).send(msg);
    } else {
      console.log("Done Multisaving / (doc)", JSON.stringify(doc, undefined, 2));
      res.send(doc)
    }
  })
})


route.put('/:id', (req, res) => {
  const recId = req.params.id;
  const recBdy = req.body;
  console.log("PUT ID:", recId);
  console.log("PUT BODY:", recBdy);
  if (!ObjId.isValid(recId)) {
    const msg = ("Failed update due to invalid id:", recId);
    console.error(msg);
    return res.status(400).send(msg);
  } else {
    var rec = new Feriado({
      motivo: req.body.motivo,
      tipo: req.body.tipo,
      dia: req.body.dia,
      mes: req.body.mes,
      id: req.body.id,
      // NOTE:  optional fields
      original: req.body.original,
      opcional: req.body.opcional,
      religion: req.body.religion,
      origen: req.body.origen,
    });

    Feriado.findByIdAndUpdate(
      {
        _id: recId
      },
      recBdy,

      { upsert: true ,
        new: true , // NOTE: if you want to receive NEW updated record, instead of the original one
      },
      (err, doc) => {
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


route.get('/:id', (req, res) => {
  const recId = req.params.id;
  console.log("Get by ID:", recId);
  if (!ObjId.isValid(recId)) {
    const msg = ("Failed getOne due to invalid id:", recId);
    console.error(msg);
    return res.status(400).send(msg);
  } else {
    Feriado.findById(recId, {}, (err, doc) => {
      if (err) {
        const msg = ("Failed getOne for id:", recId, JSON.stringify(err, undefined, 2));
        console.error(msg);
        return res.status(400).send(msg);
      } else {
        console.log("Done getOne for id", JSON.stringify(recId, undefined, 2));
        res.send(doc)
      }
    })
  }
})



route.delete('/:id', (req, res) => {
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