import { FrontPageMovieService } from "../services/frontPageMovie.service.js"

export class FrontPageMovieController {
    static async getFrontPageMovies (req, res) {
        try {
            const movies = await FrontPageMovieService.getFrontPageMovies();
            if(!movies || movies.length == 0) return res.status(404).json({status: "error", message: "No se encuentra ninguna pelicula de portada"})
            res.status(200).json({status: "success", moviesFrontPage: movies})
        } catch (error) {
            res.status(500).json({status: "error", message:error.message})
        }
    }


    static async addNewFrontPageMovies (req, res){ 
        try {
            const newDataMovie = req.body;

            const existingMovie = await FrontPageMovieService.findMovieFrontPageByTitle(newDataMovie.title);
            if (existingMovie) return res.status(404).json({status: "error", message: "Esta pelicula ya existe"})

            const movieAdd = await FrontPageMovieService.addNewFrontPageMovies(newDataMovie);
            res.status(200).json({status: "success", movieAdd})
        
        } catch (error) {
            res.status(500).json({status: "error", message: error.message})
        }
    }

    static async getFrontPageMovieById (req, res){ 
        try {
            const movieId = req.params.id;
            const movie = await FrontPageMovieService.getFrontPageMovieById(movieId)
            if(!movie) return res.status(404).json({status: "error", message: "La pelicula no existe"})

            res.json({status: "success", movie});


        } catch (error) {
            res.status(500).json({status: "error", message: error.message})
        }
    }

    
}