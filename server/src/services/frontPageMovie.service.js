import { frontPageMovieDao } from "../config/dbFactory.js";


export class FrontPageMovieService {
    static async getFrontPageMovies (){ 
        return await frontPageMovieDao.getFrontPageMovies();
    }


    static async addNewFrontPageMovies(newMovie) {
        return await frontPageMovieDao.addNewFrontPageMovies(newMovie);
    }

    static async getFrontPageMovieById(movieId) {
        return await  frontPageMovieDao.getFrontPageMovieById(movieId)
    }

    static async findMovieFrontPageByTitle(titleMovie){
        return await frontPageMovieDao.findMovieFrontPageByTitle(titleMovie);
    }
}