import mongoose from 'mongoose';
import {config} from './config.js';

const URL_DB = config.mongo.url;

export const connectDb = async()=> {
    try {
        await mongoose.connect(URL_DB)
        console.log("Base de datos mongo conectada")
    } catch (error) {
        throw error
    }
}