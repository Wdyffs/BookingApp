const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// Import routes
const countryRoute = require("./routes/countryRoute");
const userRoute = require("./routes/userRoute");

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(bodyParser.json()); // --- ability to parse a request body
app.use(cors());
app.use("/cinema", countryRoute); // --- register a route
app.use("/api", userRoute);

async function start() {
  try {
    await mongoose
      .connect(process.env.BA_DB_URI, {
        useNewUrlParser: true,
      })
      .then(() => console.log("Connected to MongoDB"));

    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
