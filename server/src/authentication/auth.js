
export const requirLogin = (req, res, next) => {
    if(req.user) {
        next()
    } else {
        res.redirect("/login");
    }
}

export const checkActiveSession = (req, res, next) => {
    if(req.user) {
        res.redirect("explore")
    } else {
        next();
    }
}



export const authorizeRoles = (allowedRoles) => {
    return (req, res, next) => {
    const { user } = req;
    if (user && allowedRoles.includes(user.role)) {
        next(); // El usuario tiene uno de los roles permitidos
    } else {
        res.status(403).send('Acceso denegado');
    }
    };
};