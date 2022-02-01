const express = require("express");
const actorController = require("../controllers/actorController");
const router = express.Router();

router.get("/actors", actorController.getActors);
router.post("/createActor", actorController.createActor);

module.exports = router;
