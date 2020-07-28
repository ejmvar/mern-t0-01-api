const mongoose = require('mongoose');

var Feriado = mongoose.model("Feriado", {
  motivo: {
    type: String,
    required: false
  }, // String
  tipo: {
    type: String,
    required: true
  }, // String // inamovible | trasladable | nolaborable | puente
  dia: {
    type: Number,
    required: true
  }, // Number // Día del mes
  mes: {
    type: Number,
    required: true
  }, // Number // Número de mes en base 1 (enero = 1)
  id: {
    type: String,
    required: true
  }, // String // Identificador único de feriado
  // en caso de tipo = trasladable
  original: {
    type: String,
    required: false
  }, // String // Fecha original en formato DD-MM
  // en caso de opcional
  opcional: {
    type: String,
    required: false
  }, // String // Propiedad con valor de opción
  // NOTE: may be forced if not available 
  // opcional: {
  //   type: String,
  //   get: (): undefined => undefined,
  // },

  religion: {
    type: String,
    required: false
  }, //  "judaísmo", // Ejemplo religion
  origen: {
    type: String,
    required: false
  }, //  "armenia" // Ejemplo origen

  // // Ejemplo opcional
  // "opcional": "religion",
  // "religion": "judaísmo", // Ejemplo religion
  // "origen": "armenia" // Ejemplo origen
}
,
// NOTE: fix/force MongoDB lowercase/plural Collection name mangling
"Feriados"
);

module.exports = {
  Feriado
};