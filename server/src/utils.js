import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import multer from 'multer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const createHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync());
}

export const isValidPassword = (userDb, password) => {
    return  bcrypt.compareSync(password, userDb.password)
}

export const checkValidFiels = (body)=> {
    const {user_name, email, password} = body;
    if(!user_name || !email || password) {
        return false;
    }
    return true;
}




export default __dirname;