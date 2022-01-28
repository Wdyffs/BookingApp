const express = require("express");
const cinemasController = require("../controllers/cinemasController");
const router = express.Router();

router.get("/cinemas", cinemasController.getCinemas);
router.post("/createCinema", cinemasController.createCinema);

module.exports = router;
