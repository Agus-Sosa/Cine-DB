import MovieManager from "../managers/mongo/movieManager.js";

import { PERSISTENCE_TYPES } from "./databaseConfig.js";
import { connectDb } from "./dbConnection.js";
import { config } from "./config.js";



const PERSISTENCE = config.server.persistence;

class dataBaseFactory {

    static createPersistence(persistenceTypes){
        switch (persistenceTypes) {
            case PERSISTENCE_TYPES.MONGO:
                connectDb();
                return {
                    movieDao: new MovieManager(),

                }
        
            default:
                throw new Error("Error al conectarse a la base de datos")
                
        }
    }

}

const Db = dataBaseFactory.createPersistence(PERSISTENCE);

export const {movieDao, userDao, favoriteDao}= Db;