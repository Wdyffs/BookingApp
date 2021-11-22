const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use('/cinema', routes) // --- register a route
app.use(express.json()) // --- ability to parse a request body

async function start() {
  try {
    await mongoose.connect(process.env.BA_DB_URI, {
      useNewUrlParser: true
    })

    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}`);
    })
  } catch (e) {
    console.log(e);
  }
}

start()
