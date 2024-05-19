import FrontPageMovie from "../../models/frontPageModel.js";

export class FrontPageMovieManager {
    constructor(){
        this.model = FrontPageMovie;
    }

    async getFrontPageMovies (){
        try {
            const movies = await this.model.find().lean();
            return movies;

        } catch (error) {
            throw error
        }
    }

    async addNewFrontPageMovies (newMovie) {
        try {
            const movieAdd = this.model.create(newMovie);
            return (await movieAdd).save()
        } catch (error) {
            throw error
        }
    }

    async getFrontPageMovieById(movieId) {
        try {
            const movie = this.model.findById(movieId).lean();
            return movie;
        } catch (error) {
            throw error
        }
    }

    async findMovieFrontPageByTitle (title){ 
        try {
            const movie =await this.model.findOne({title});
            return movie;
        } catch (error) {
            throw error;
        }
    }
}