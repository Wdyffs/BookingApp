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
      ageRestriction
    } = req.body;
    const candidate = await Movie.findOne({title})
    if(candidate) {
      res.status(500).json({message: "There is already exists this movie"})
    }

    const movie = new Movie({
      title,
      imageUrl,
      duration,
      description,
      cinemas,
      actors,
      genre,
      ageRestriction
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
    const movies = await Movie.find()
    res.json(movies);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
router.get("/movie/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const movie = await Movie.findOne({ _id: id }).populate('actors').populate('genre');
    res.status(200).json({ message: "Find successfully", movie: movie });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
