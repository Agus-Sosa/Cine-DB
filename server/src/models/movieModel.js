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
    actors: [{
        name: {type: String, required: true},
        image: {type: String, required: true, default: "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"}
    }],
    gallery: [{url: {type: String}}],
    trailerLink: {type:String, required: true},
    image:{type:String, required: true},
    backgroundImage: {type:String, required: true},
})


const Movie = mongoose.model(collectionMovie, movieSchema);


export default Movie;