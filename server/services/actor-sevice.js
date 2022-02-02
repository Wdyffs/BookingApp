const ActorModel = require("../models/actor");

class actorService {
    async createActor(firstName, lastName) {
        const candidate = await ActorModel.findOne({firstName, lastName});
        if (candidate) {
            throw new Error(`Actor ${firstName} ${lastName} does exists`);
        }
        const actor = await ActorModel.create({
            firstName,
            lastName
        });
        return actor;
    }
    async getActors() {
        const actors = ActorModel.find();
        return actors
    }
}

module.exports = new actorService();
