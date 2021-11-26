const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

// Import routes
const countryRoute = require('./routes/countryRoute')


const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(bodyParser.json()) // --- ability to parse a request body
app.use('/cinema', countryRoute) // --- register a route

async function start() {
  try {
    await mongoose.connect(process.env.BA_DB_URI, {
      useNewUrlParser: true
    })
      .then(() => console.log('Connected to MongoDB'))

    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}`);
    })
  } catch (e) {
    console.log(e);
  }
}

start()
