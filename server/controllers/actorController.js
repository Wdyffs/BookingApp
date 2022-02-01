const actorService = require("../services/actor-sevice")

class actorController {
    async getActors(req, res) {
        try {

        } catch (e) {

        }
    }
    async createActor(req, res) {
        try {
            const {firstName, lastName} = req.body;
            const actor =  await actorService.createActor(firstName, lastName);
            await actor.save()
            res.status(200).json({message: "Actor successfully added!!!"})
        } catch (e) {
            res.status(500).json({message: "Something happened", error: e.message})
        }
    }
}

module.exports = new actorController();