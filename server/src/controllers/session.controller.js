import { UserService } from "../services/user.service.js";
import { createHash } from "../utils.js";

export class SessionController {
    static redirectLogin (req, res) {
        res.redirect("/login")
    };

    static redirectProfile (req, res) {
        res.redirect("/profile")
    }


    static logOut (req, res) {
        req.session.destroy((err)=> {
            if(err) {
                console.error("Error al cerrar sesion");
            } else  {
                res.redirect("/login")
            };
        })
    }




}