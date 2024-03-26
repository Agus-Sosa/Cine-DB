import express from 'express'
import { config } from './config/config.js';
import { MovieRouter } from './routes/movie.routes.js';
import { UserRouter } from './routes/user.routes.js';
import session from 'express-session';
import MongoStore from 'connect-mongo'
import passport from 'passport';
import { FavoriteRouter } from './routes/favorite.routes.js';
import { SessionRouter } from './routes/session.routes.js';
import { initializePassport } from './strategies/localStrategy.js';
import cors from 'cors';

const PORT = config.server.port
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use(
    session({
      store: MongoStore.create({
        mongoUrl: config.mongo.url,
      }),
      secret: config.server.secretSession,
      resave: true,
      saveUninitialized: true,
    })
  );
  

// Configuracion de passport
initializePassport()
app.use(passport.initialize());
app.use(passport.session());


// Rutas 
app.use("/api/movies", MovieRouter);
app.use("/api/users", UserRouter);
app.use("/api/favorites", FavoriteRouter);
app.use("/api/sessions", SessionRouter)

app.listen(PORT, ()=> console.log(`Server Up in ${PORT}`))