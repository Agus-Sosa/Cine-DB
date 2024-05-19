import { Router } from "express";
import { FrontPageMovieController } from "../controllers/frontPageMovie.controller.js";

const router = Router();

router.get('/', FrontPageMovieController.getFrontPageMovies);
router.post('/add', FrontPageMovieController.addNewFrontPageMovies);
router.get("/:id", FrontPageMovieController.getFrontPageMovieById);

export {router as FrontPageMovieRouter}