const movieService = require("../services/movieService")

class movieController {
    async deleteMovie(req, res, next) {
        try {
            const id = req.params.id;
            await movieService.deleteMovie(id);
            res.status(200).json({message: "Movie Deleted"});
            next()
        } catch (e) {
            res.status(500).json({message: "Movie did not deleted", error: e.message});
        }
    }
}

module.exports = new movieController();