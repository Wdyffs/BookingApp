const genreService = require("../services/genre-service")

class genreController {
    async createGenre(req, res) {
        try {
            const {name} = req.body;
            const genre = await genreService.createGenre(name)
            res.status(200).json({message: 'Genre successfully created', genre: genre})
        } catch (e) {
            res.status(500).json({message: 'Problems with creating genre', error: e.message})
        }
    }

    async getGenres(req, res) {
        try {
            const genres = await genreService.getGenres();
            res.status(200).json({genres: genres})
        } catch (e) {
            res.status(500).json({message: 'Problems with creating genre', error: e.message})
        }
    }
}

module.exports = new genreController();