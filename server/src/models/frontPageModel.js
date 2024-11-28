import mongoose from 'mongoose';
import { collectionFrontPageMovie } from './constants/collections.js';


const frontPageMovieModel = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    genre: {type: String, required:true},
    year:{type:String, required: true},
    image: {type: String, required: true},
    link: {type: String, required: true, default: "pending"}
});


const FrontPageMovie= mongoose.model(collectionFrontPageMovie, frontPageMovieModel);

export default FrontPageMovie;