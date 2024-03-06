import dotenv from 'dotenv';
dotenv.config();

export const config = {
    server: {
        port: process.env.PORT || 3000,
        persistence: process.env.PERSISTENCE,
    },
    mongo: {
        url: process.env.MONGO_URL,
    },

}