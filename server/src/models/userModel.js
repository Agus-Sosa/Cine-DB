import mongoose from "mongoose";
import { collectionFavorites, collectionUser } from "./constants/collections.js";

const userSchema = new mongoose.Schema({
    user_name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true, enum: ["admin", "user"]},
    favorites: {type: mongoose.Schema.Types.ObjectId, ref: collectionFavorites}
})

const User = mongoose.model(collectionUser, userSchema);

export default User;