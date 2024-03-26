import Movie from "../../models/movieModel.js";

class MovieManager {
    constructor () {
        this.model = Movie;
    }


    async getMovies  () {
        try {
            const movies = await this.model.find().lean();
            return movies;

        } catch (error) {
            throw new Error(`Error al obtener las pelicuals ${error}`)
        }
    }


    async deleteMovie (movieId) {
        try {
            return await this.model.findByIdAndDelete(movieId);
        } catch (error) {
            throw error;
        }
    }



    async getMovieById (movieId) {
        try {
            const movie = await this.model.findById(movieId)
            return movie;
        } catch (error) {
            throw error;
        };
    }

    async addNewMovie (newMovie) {
        try {
            const movieAdd = new this.model(newMovie);
            return await movieAdd.save();
        } catch (error) {
            throw error
        }
    }


    async findMovieByTitle (title){ 
        try {
            const movie =await this.model.findOne({title});
            return movie;
        } catch (error) {
            throw error;
        }
    }
}


export default MovieManager