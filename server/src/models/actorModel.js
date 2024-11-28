import mongoose from "mongoose";
import { collectionActor } from "./constants/collections.js";

const actorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true}
});


const Actor = mongoose.model(collectionActor, actorSchema);


export default Actor