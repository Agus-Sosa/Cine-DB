import { movieDao } from "../config/dbFactory.js";

export class MovieService {
    static async getMovies () {
        return await movieDao.getMovies();
    }

    static async deleteMovie(movieId) {
        return await movieDao.deleteMovie();
    }

    static async getMovieById (movieId) {
        return await movieDao.getMovieById(movieId);
    }

    static async addNewMovie (newMovie) {
        return await movieDao.addNewMovie(newMovie);
    }

    static async findMovieByTitle (title) {
        return await movieDao.findMovieByTitle(title)
    }
}


