import { Router } from "express";
import { SessionController } from "../controllers/session.controller.js";
import passport from "passport";

const router = Router();

router.post("/register", passport.authenticate("registerStrategy", {

}))

router.get('/fall-register', SessionController.fallRegister );


router.post("/login", passport.authenticate("loginStrategy", {
    failureRedirect: "/api/sessions/fall-login",
}))


router.get("/fall-login", SessionController.fallLogin);


router.post('/logout', SessionController.logOut);



export {router as SessionRouter}