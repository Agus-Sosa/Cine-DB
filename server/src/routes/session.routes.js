import { Router } from "express";
import { SessionController } from "../controllers/session.controller.js";
import passport from "passport";

const router = Router();


router.post("/register", passport.authenticate("registerStrategy", {
    failureRedirect: "/api/sessions/fail-register",
  }), (req, res) => {
    res.json({ success: true, message: "Registro exitoso" });
});


router.get('/fall-register', SessionController.fallRegister );


router.post("/login", passport.authenticate("loginStrategy", {
    failureRedirect: "/api/sessions/fall-login",
}), (req, res)=> {
    const cookie = req.sessionID;
    res.cookie("session", cookie)
    res.json({success: true, message: "Se incio sesion con exito", user: req.user})
})


router.get('/profile', SessionController.profile);

router.get("/fall-login", SessionController.fallLogin);


router.get("/verify", SessionController.verify)

router.post('/logout', SessionController.logOut);



export {router as SessionRouter}