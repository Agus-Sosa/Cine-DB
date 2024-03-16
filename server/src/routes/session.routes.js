import { Router } from "express";
import { SessionController } from "../controllers/session.controller.js";
import passport from "passport";

const router = Router();

router.post("/register", passport.authenticate("registerStrategy", {
    failureRedirect: "/api/sessions/fall-register",

}))

router.post("/login", passport.authenticate("loginStrategy", {
    failureRedirect: "/api/sessions/fall-login",
}))


router.post('/logout', SessionController.logOut);



export {router as SessionRouter}