import {Router} from 'express';
import requireLogin from '../authentication/auth.js'
import { FavoriteController } from '../controllers/favorite.controller.js';

const router = Router()


router.get("/",FavoriteController.getFavoriteList);
router.post("/:movieId", FavoriteController.addMovieToFavorites)
router.delete('/clear',requireLogin, FavoriteController.clearFavorites)
router.delete("/:movieId", FavoriteController.deleteMovieFromFavorites)


export {router as FavoriteRouter}