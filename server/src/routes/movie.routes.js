import { Router } from 'express';
import { MovieController } from '../controllers/Movie.controller.js';

const router = Router();

router.get('/', MovieController.getMovies);
router.post("/", MovieController.createNewMovie);
router.get("/:mid", MovieController.getMovieById);

export {router as MovieRouter}