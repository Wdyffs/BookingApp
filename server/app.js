const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// Import routes
const actorRoute = require("./routes/actorRoute")
const userRoute = require("./routes/userRoute");
const movieRoute = require("./routes/movieRoute");
const cinemasRoute = require("./routes/cinemaRoute");
const genreRoute = require("./routes/genreRoute")

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(bodyParser.json()); // --- ability to parse a request body
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/genre", genreRoute);
app.use("/movie", movieRoute);
app.use("/actor", actorRoute); // --- register a route
app.use("/cinema", cinemasRoute);
app.use("/api/auth", userRoute);

async function start() {
  try {
    await mongoose
      .connect(process.env.BA_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Connected to MongoDB"));

    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}`);
    });
  } catch (e) {
    console.log(e.message);
  }
}

start();
