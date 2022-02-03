const GenreModel = require("../models/genre")

class genreService {
    async createGenre(name) {
        const candidate = await GenreModel.findOne({name})
        if (candidate) {
            throw new Error('This name is already exists')
        }
        const genre = await GenreModel.create({name})
        return genre
    }
    async getGenres() {
        const genres = await GenreModel.find();
        return genres;
    }
}

module
    .exports = new genreService()