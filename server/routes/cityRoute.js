const express = require("express");
const cityController = require("../controllers/cityController")
const router = express.Router();

router.get("/get", cityController.getCities);
router.post("/add", cityController.addCity);

module.exports = router;