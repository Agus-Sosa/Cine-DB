import express from 'express'
import { config } from './config/config.js';
import { MovieRouter } from './routes/movie.routes.js';
import { UserRouter } from './routes/user.routes.js';
import passport from 'passport';
import { FavoriteRouter } from './routes/favorite.routes.js';

const PORT = config.server.port
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))


// Configuracion de passport
app.use(passport.initialize());
app.use(passport.session());


// Rutas 
app.use("/api/movies", MovieRouter);
app.use("/api/users", UserRouter);
app.use("/api/favorites", FavoriteRouter);

app.listen(PORT, ()=> console.log(`Server Up in ${PORT}`))