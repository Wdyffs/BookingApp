const cinemaService = require("../services/cinema-service");

class cinemasController {
  async createCinema(req, res, next) {
    try {
      const { name, imageUrl, city, address, movies, halls, seats } = req.body;
      const cinema = await cinemaService.createCinema(name, imageUrl, city, address, movies, halls, seats);
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
      const cinemas = await cinemaService.getCinemas();
      res.status(200).json({ cinemas: cinemas });
    } catch (e) {
      res.status(500);
    }
  }
}

module.exports = new cinemasController();
