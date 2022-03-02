const MovieModel = require("../models/movie");

class movieService {
    async deleteMovie(id) {
        const candidate = await MovieModel.findOne({_id: id});
        if (!candidate) {
            throw new Error("Movie is already deleted");
        }
       await MovieModel.deleteOne({_id: id});
    }
    async updateMovie(cinemaId, movies) {
       for (const m of movies) {
            const movie = await MovieModel.findOne({_id: m._id});
            movie.cinemas.push(cinemaId);
            await MovieModel.findOneAndUpdate({_id: m._id}, {cinemas: movie.cinemas});
        }
    }
}

module.exports = new movieService()