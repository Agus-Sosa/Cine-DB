import express from 'express'
import { config } from './config/config.js';
import { MovieRouter } from './routes/movie.routes.js';
import cors from 'cors';

const PORT = config.server.port
const app = express();

app.use(cors({
  origin: "http://127.0.0.1:5173",
  credentials: true, 
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));


  

// Configuracion de passport;


// Rutas 
app.use("/api/movies", MovieRouter);

app.listen(PORT, ()=> console.log(`Server Up in ${PORT}`))