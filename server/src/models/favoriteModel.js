import mongoose from "mongoose";
import { collectionFavorites, collectionMovie, collectionUser } from "./constants/collections.js";



const favoritesSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: collectionUser },
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: collectionMovie }],
});



favoritesSchema.pre(['find','findOne'], function(){
    this.populate(`${collectionMovie}.movie`)
})


const Favorites = mongoose.model(collectionFavorites, favoritesSchema);

export default Favorites
