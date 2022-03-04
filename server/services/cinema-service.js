const CinemaModel = require("../models/cinema");

class cinemaService {
  async createCinema(name, imageUrl, city, address, movies = [], halls = [], seats) {
    const candidate = await CinemaModel.findOne({ name });
    if (candidate) {
      throw new Error(`Cinema with ${name} name does exists`);
    }
    const cinema = await CinemaModel.create({
      name,
      imageUrl,
      city,
      address,
      movies,
      halls,
      seats
    });
    return cinema;
  }
  async updateCinema(id) {
    return;
  }
  async getCinemas() {
    try {
      const cinemas = await CinemaModel.find()
          .populate("movies")
          .populate('city');
      return cinemas;
    } catch (e) {
      return e.message;
    }
  }

  async deleteCinema(id) {
     await CinemaModel.deleteOne({_id: id});
  }
}
module.exports = new cinemaService();
