const express = require("express");
const Movie = require("../models/movie");
const router = express.Router();

router.post("/sendmovie", async (req, res) => {
  try {
    const { title } = req.body;
    const movie = new Movie({ title });
    await movie.save();
    res.status(200).json({ message: "movie successfull created" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
router.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
