import FavoriteManager from "../managers/mongo/favoritesManager.js";
import MovieManager from "../managers/mongo/movieManager.js";
import UserManger from "../managers/mongo/userManager.js";
import { PERSISTENCE_TYPES } from "./databaseConfig.js";
import { connectDb } from "./dbConnection.js";


class dataBaseFactory {

    static createPersistence(persistenceTypes){
        switch (persistenceTypes) {
            case PERSISTENCE_TYPES.MONGO:
                connectDb();
                return {
                    movieDao: new MovieManager(),
                    userDao: new UserManger(),
                    favoriteDao: new FavoriteManager(),
                }
        
            default:
                throw new Error("Error al conectarse a la base de datos")
                
        }
    }

}

const db = dataBaseFactory.createPersistence(config.server.persistence);

export const {movieDao, userDao, favoriteDao}= db;