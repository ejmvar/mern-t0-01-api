const mongoose = require('mongoose');

// NOTE: could use dotenv
const MONGO_URI = "mongodb://root:rootpassword@localhost:57017";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) {
      console.error("Mongo conn failed at:", MONGO_URI, JSON.stringify(err, undefined, 2));
    } else {
      console.log("Mongo avail at:", MONGO_URI);
    }
  }

);