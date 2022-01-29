const CinemaModel = require("../models/cinema");

class cinemaService {
  async createCinema(name, imageUrl, address, movies = [], halls = []) {
    const candidate = await CinemaModel.findOne({ name });
    if (candidate) {
      throw new Error(`Cinema with ${name} name does exists`);
    }
    const cinema = await CinemaModel.create({
      name,
      imageUrl,
      address,
      movies,
      halls,
    });
    return cinema;
  }
  async updateCinema(id) {
    return;
  }
  async getCinemas() {
    try {
      const cinemas = await CinemaModel.find();
      return cinemas;
    } catch (e) {
      return e.message;
    }
  }
}
module.exports = new cinemaService();
