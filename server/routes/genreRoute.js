const express = require("express");
const router = express.Router();
const genreController = require("../controllers/genreController")

router.post("/createGenre", genreController.createGenre );
router.get("/genres", genreController.getGenres)

module.exports = router