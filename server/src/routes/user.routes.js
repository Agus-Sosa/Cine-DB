import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();


router.post("/favorites/add/:movieId", UserController.addFavorites);

export {router as UserRouter};