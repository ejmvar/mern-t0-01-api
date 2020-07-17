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
  console.warn("POST body", req.body);
  var rec = new Feriado({
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
  });
  // FIXME: delete: Feriado
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

// NOTE: for initial preload passing Feriado[]
route.post('/many', (req, res) => {
  console.warn("POST body", req.body);
  var recs = req.body;
  console.warn("POST body type : rect", typeof (recs));

  // var rec = new Feriado({
  //   motivo: req.body.motivo,
  //   tipo: req.body.tipo,
  //   dia: req.body.dia,
  //   mes: req.body.mes,
  //   id: req.body.id,
  //   // // TODO:  optional fields
  //   // original: req.body.original,
  //   // opcional: req.body.opcional,
  //   // religion: req.body.religion,
  //   // origen: req.body.origen,
  // });

  // FIXME: delete: Feriado
  // rec.insertMany((err, doc) => {
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
  // NOTE: refactor using recId
  const recId = req.params.id;
  const recBdy = req.body;
  console.warn("PUT ID:", recId);
  console.warn("PUT BODY:", recBdy);
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
      // TODO:  optional fields
      original: req.body.original,
      opcional: req.body.opcional,
      religion: req.body.religion,
      origen: req.body.origen,
    });

    Feriado.findByIdAndUpdate(
      // NOTE: Search object
      //recId, 
      {
        _id: recId
      },
      // NOTE: Update/Replacement object
      // rec.body,
      recBdy,
      // {
      //   // // Feriado.findOneAndReplace(recId, {
      //   // // TODO: test if this updated existing data
      //   // // $set: updatedRecord // FIXME: not defined
      //   $set: "updatedRecord" // FIXME: not defined
      // }

      // NOTE: ensure update onde found
      { upsert: true },
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
  // NOTE: refactor using recId
  const recId = req.params.id;
  console.warn("Get by ID:", recId);
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