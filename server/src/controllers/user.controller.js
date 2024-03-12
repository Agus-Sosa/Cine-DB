import { MovieService } from "../services/movie.service.js";
import { UserService } from "../services/user.service.js";


export class UserController {
 
    
    static async addFavorites (req, res) {
        try { 

            const userId = req.user;
            const movieId = req.params.mid
            
            const user =await UserService.getUserById(userId);
            
            if(user.favoriteMovies.includes(movieId)) {
                return res.status(400).json({status: "success", message:"La pelicula ya esta en favoritos"})
            }

            const movie = await MovieService.getMovieById(movieId);

            if(!movie){
                return res.status(404).json({status: "error", message:"la pelicula no existe"})
            }

            user.favoriteMovies.push(movieId);
            await user.save();

            res.status(200).json({status: "sucess", message: "La pelicula fue agregada correctamente"});

        } catch (error) {  
            res.status(404).json({status:"error", message: error.message})
        }
    }


    static async removeMoviesFavorite (req,res) {
        try {
            const userId = req.user;
            const movieId = req.params.mid

            const user = await UserService.getUserById(userId);

            if(!user.favoriteMovies.includes(movieId)) {
                return res.status(400).json({status: "error", message: "La pelicula no esta en favoritos"})
            }


            user.favoriteMovies = user.favoriteMovies.filter

        } catch (error) {
            res.status(500).json({status: "error", message: "Error al eliminar la pelicula de favoritos"})
        }
    }
}