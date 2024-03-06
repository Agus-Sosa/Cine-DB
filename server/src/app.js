import express from 'express'
import { config } from './config/config.js';


const PORT = config.server.port
const app = express();




app.listen(PORT, ()=> console.log(`Server Up in ${PORT}`))