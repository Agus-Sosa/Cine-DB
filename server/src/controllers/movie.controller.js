import { MovieService } from "../services/movie.service.js";

export class movieController {
    static async getMovies (req, res) {
        try {

            const movies = await MovieService.getMovies();
            res.status(200).json({status: "success", movies: movies});

        } catch (error) {
            res.status(404).json({status: "error", message: `Error al obtener las peliculas ${error}`})
        }
    }

    static async getMovieById (req, res) {
        try {

            const mid = req.params.mid;
            const getMovie = await MovieService.getMovieById(mid);

            res.status(200).json({status: "success", getMovie});

        } catch (error) {
            res.status(404).json({status: "error", message: `Error al obtener la pelicula ${error}`})
        }
    }

    static async deleteMovie (req, res) {
        try {
            const mid = req.params.mid;
            const movie = await MovieService.deleteMovie(mid);
            res.status(200).json({status: "sucess", message: `Pelicula ${movie} eliminada correctamente `})
        } catch (error) {
            res.status(404).json({status: "error", message: `Error al eliminar la pelicula ${error}`})
        }
    }
}