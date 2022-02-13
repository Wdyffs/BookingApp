const MovieModel = require("../models/movie");

class movieService {
    async deleteMovie(id) {
        const candidate = await MovieModel.findOne({_id: id});
        if (!candidate) {
            throw new Error("Movie is already deleted");
        }
       await MovieModel.deleteOne({_id: id});
    }
}

module.exports = new movieService()