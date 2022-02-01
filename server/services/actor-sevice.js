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
}

module.exports = new actorService();
