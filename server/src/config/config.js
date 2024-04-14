import dotenv from 'dotenv';
dotenv.config();

export const config = {
    server: {
        port: process.env.PORT || 3000,
        persistence: process.env.PERSISTENCE || "MONGO",
        secretSession: process.env.SECRET_SESSION,
        jwtSecret: process.env.JWT_SECRET
    },
    mongo: {
        url: process.env.MONGO_URL,
    },

    facebook: {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK_URL
    }

}
