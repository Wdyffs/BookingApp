const CityModel = require("../models/cityModel")

class CityService {
    async getCities() {
        const cities = await CityModel.find().populate("cinemas");
        if (cities.length === 0) {
           throw new Error("There is no cities")
        }
        return cities
    }

    async addCity(name) {
        const candidate = await CityModel.findOne({name});
        if (candidate) throw new Error(`${name} city is already created`);
        const city = await CityModel.create({name});
        return city;
    }
}

module.exports = new CityService();