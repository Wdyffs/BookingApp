const cinemaService = require("../services/cinema-service");

class cinemasController {
  async createCinema(req, res, next) {
    try {
      const { name, imageUrl, address, movies, halls } = req.body;
      const cinema = await cinemaService.createCinema(name, imageUrl, address);
      res
        .status(201)
        .json({ message: "Cinema was created successfully", cinema: cinema });
      next();
    } catch (e) {
      res
        .status(500)
        .json({ message: "Something went wrong", errors: e.message });
    }
  }
  async getCinemas(req, res, next) {
    try {
      res.json("Cinemas is ready");
    } catch (e) {
      res.status(500);
    }
  }
}

module.exports = new cinemasController();
