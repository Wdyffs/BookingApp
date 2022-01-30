const express = require("express");
const Movie = require("../models/movie");
const router = express.Router();

router.post("/sendmovie", async (req, res) => {
  try {
    const {
      title,
      imageUrl,
      description,
      duration,
      cinemas = [],
      actors = [],
      genre = [],
    } = req.body;
    const movie = new Movie({
      title,
      imageUrl,
      duration,
      description,
      cinemas,
      actors,
      genre,
    });
    await movie.save();
    res
      .status(200)
      .json({ message: "movie successfull created", movie: movie });
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
router.get("/movie/:title", async (req, res) => {
  try {
    const title = req.params.title;
    const movie = await Movie.findOne({ title: title });
    res.status(200).json({ message: "Find successfully", movie: movie });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
