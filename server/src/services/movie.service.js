import { movieDao } from "../config/dbFactory.js";

export class MovieService {
    static async getMovies () {
        return await movieDao.getMovies();
    }

    static async deleteMovie() {
        return await movieDao.deleteMovie();
    }

    static async getMovieById () {
        return await movieDao.getMovieById();
    }

    static async addNewMovie () {
        return await movieDao.addNewMovie();
    }
}


