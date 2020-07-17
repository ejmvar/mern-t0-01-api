// import { Schema } from 'mongoose';
// const feriadoSchema:Schema

import { Document, Model } from 'mongoose';

interface Feriado {
  motivo: string;   // String
  tipo: string;     // String // inamovible | trasladable | nolaborable | puente
  dia: number;      // Number // Día del mes
  mes: number;      // Number // Número de mes en base 1 (enero = 1)
  id: string;       // String // Identificador único de feriado

  // en caso de tipo = trasladable
  original: string; // String // Fecha original en formato DD-MM

  // en caso de opcional
  opcional?: string; // String // Propiedad con valor de opción
  religion?: string; //  "judaísmo", // Ejemplo religion
  origen?: string; //  "armenia" // Ejemplo origen

  // // Ejemplo opcional
  // "opcional": "religion",
  // "religion": "judaísmo", // Ejemplo religion
  // "origen": "armenia" // Ejemplo origen

}

export default Feriado;
