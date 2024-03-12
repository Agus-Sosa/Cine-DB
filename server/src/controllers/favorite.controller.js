import { FavoriteService } from "../services/favorite.service.js";

export class FavoriteController {

    static async clearFavorites (req, res)  {
        try {
            const userId = req.user;
            await FavoriteService.clearFavorites(userId);
            res.status(200).json({status:"success", message:"Todas las peliculas fueron eliminadas con exito"})
        } catch (error) {
            res.status(500).json({status: "error", message: `Error al eliminar todas las peliculas de favoritos ${error}`})
        }
    }

    static async addMovieToFavorites (req, res) {
        try {
            const userId = req.user;
            const movieId = req.mid;
            await FavoriteService.addMovieToFavorites(userId, movieId);
            res.status(200).json({status: "success", message: `Pelicula ${movieId} agregada correctamente`});

        } catch (error) {
            res.status(500).json({status:"error", message: "Error al agregar el producto al carrito"})
        }
    }

    static async deleteMovieFromFavorites (req, res) {
        try {
            const userId = req.user
            const movieId = req.pamams.mid

            await FavoriteService.deleteMovieFromFavorites(userId, movieId);
            res.status(200).json({status: "success", message: "Pelicula Eliminada correctamente"})
        } catch (error) {
            res.status(500).json({status: "error", message: "Error al eliminar la pelicula de favoritos"})
        }
    }


    static async getFavoriteList (req, res) {
        try {
            const userId = req.user;
            const favoriteList = await FavoriteService.getFavoriteList(userId);
            res.status(200).json({status: "success", favoriteList})
        
        } catch (error) {
            res.status(500).json({status: "error", message: "Error al obtener la lista"})
        }
    }
}