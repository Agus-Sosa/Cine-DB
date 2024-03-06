import MovieManager from "../managers/mongo/movieManager";
import { PERSISTENCE_TYPES } from "./databaseConfig.js";
import { connectDb } from "./dbConnection.js";


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

const db = dataBaseFactory.createPersistence(config.server.persistence);

export const {movieDao}= db