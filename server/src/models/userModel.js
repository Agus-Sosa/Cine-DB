import mongoose from "mongoose";
import { collectionFavorites, collectionUser } from "./constants/collections.js";

const userSchema = new mongoose.Schema({
    user_name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true, enum: ["admin", "user"], default:"user"},
    favorites: {type: mongoose.Schema.Types.ObjectId, ref: collectionFavorites},
    avatar: {type: String, default: "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"}
})

const User = mongoose.model(collectionUser, userSchema);

export default User;