const express = require("express");
const cinemasController = require("../controllers/cinemasController");
const router = express.Router();

router.get("/cinemas", cinemasController.getCinemas);
router.post("/createCinema", cinemasController.createCinema);
router.delete("/delete/:id", cinemasController.deleteCinema)

module.exports = router;
