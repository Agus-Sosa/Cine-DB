import Favorites from "../../models/favoriteModel.js"
import Movie from "../../models/movieModel.js";
class FavoriteManager {

    constructor () {
        this.modelFavorites = Favorites;
        this.modelMovie = Movie
    }


    async getFavoriteList (userId) {
        try {
            const favorites = await this.modelFavorites.findOne({user: userId}).populate("movies")
            return favorites.movies
        } catch (error) {
            throw error
        }
    }


    async addMovieToFavorites(userId , movieId) {
        try {
            const favorites = await this.modelFavorites.findOne({user: userId})
            favorites.movies.push(movieId);
            await favorites.save();

            return favorites;
        } catch (error) {
            throw error
        }
    }

    async deleteMovieFromFavorites (userId, movieId) {
        try {
            const favorites = await this.modelFavorites.findOne({user: userId});

            favorites.movies =favorites.movies.filter((id)=>id !== movieId);
            await favorites.save();

            return favorites;
        

        } catch (error) {
            throw error
        }
    }


    async clearFavorites (userId) {
        try {
            const favorites= await this.modelFavorites.findOne({user: userId});
            favorites.movies = [];
            await favorites.save()
            return favorites;
        } catch (error) {
            throw error
        }
    }

    a
}

export default FavoriteManager;