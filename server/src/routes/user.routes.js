import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";

const router = Router();


router.post("/favorites/add/:movieId", UserController.addFavorites);
router.get("/user/:uid", UserController.getUserById)
export {router as UserRouter};