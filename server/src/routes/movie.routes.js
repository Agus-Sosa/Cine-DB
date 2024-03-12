import {Router} from 'express';
import { MovieController } from '../controllers/Movie.controller';

const router = Router();

router.get('/', MovieController.getMovies());


export {router as MovieRouter}