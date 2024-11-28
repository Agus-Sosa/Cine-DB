import Actor from "../../models/actorModel.js";

class ActorManager {
    constructor() {
        this.model=Actor;
    }


    async getActors (){
        try {
            const actors = this.model.find().lean();
            return actors;
        } catch (error) {
            throw error
        }
    }

    async deleteActor (actorId) {
        try {  
            return await this.model.findByIdAndDelete(actorId);
        } catch (error) {
            throw error
        }
    }
}