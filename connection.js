const mongoose = require("mongoose");
    require('dotenv').config();
mongoose
  .connect(process.env.ATLAS)
  .then(() => console.log("CONECTADO A LA BASE DE DATOS"))
  .catch((err) => console.error('ERROR CONNECTING TO DATABASE :', err)); 