const cityService = require("../services/city-service")

class CityController {
    async getCities(req, res, next) {
        try {
            const cities = await cityService.getCities();
            res.status(200).json({cities: cities});
            next()
        } catch (e) {
            res.status(500).json({message: e.message})
        }

    }

    async addCity(req, res, next) {
        try {
            const {name} = req.body;
            const city = await cityService.addCity(name);
            res.status(200).json({city});
            next();
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

}

module.exports = new CityController();