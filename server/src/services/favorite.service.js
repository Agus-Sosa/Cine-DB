import { favoriteDao } from "../config/dbFactory.js";


export class FavoriteService {
    static async addMovieToFavorites (userId, movieId) {
        return await favoriteDao.addMovieToFavorites(userId, movieId)
    }

    static async deleteMovieFromFavorites (userId, movieId) {
        return await favoriteDao.deleteMovieFromFavorites(userId, movieId);
    };

    static async clearFavorites (userId) {
        return await favoriteDao.clearFavorites(userId);
    }

    static async getFavoriteList (userId) {
        return await favoriteDao.getFavoriteList(userId)
    }
}