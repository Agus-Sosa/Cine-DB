import mongoose from "mongoose";
import { collectionMovie } from "./constants/collections.js";


const movieSchema =new mongoose.Schema({
    title: {type: String, required: true},
    director: {type: String, required:true},
    year: {type: Number, required: true},
    genre: {type: [String], required: true},
    synopsis: {type: String, required: true},
    duration: {type:String, required: true},
    rating: {type:Number, required: true},
    actors: [{type: mongoose.Types.ObjectId, ref: 'Actor'}],
    gallery: [{url: String}],
    trailerLink: {type:String, required: true},
    image:{type:String, required: true},
    backgroundImage: {type:String, required: true},
})


const Movie = mongoose.model(collectionMovie, movieSchema);


export default Movie;