import passport from 'passport'
import LocalStrategy from 'passport-local';
import { UserService } from '../services/user.service.js';
import { createHash, isValidPassword } from '../utils.js';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
export const initializePassport = () => {
    passport.use("registerStrategy", new LocalStrategy(
        {
            usernameField: "email",
            passReqToCallback: true
        },
        async (req, username, password, done) => {
            try {

                const {user_name} = req.body

                const user = await UserService.getUserByEmail(username);
                if(user){
                    return done(null)
                }

                const newUser  ={
                    user_name: username,
                    email: username,
                    password: createHash(password)
                }

                const userCreated = await UserService.saveUser(newUser);
                return done(null,  userCreated);

            } catch (error) {
                return done(error)
            }
        }
    ));

    passport.use("loginStrategy", new LocalStrategy(
        {
            usernameField: "email" 
        },
        async (username, password, done) => {
            try {
                const user = await UserService.getUserByEmail(username)
                if(!user){
                    return done(null, false);
                }

                const isPasswordValid = isValidPassword(user, password);

                if(!isPasswordValid) {
                    return done(null, false ,{message: "Contraseña incorrecta"})
                }

                return done(null, user)

            } catch (error) {
                return done(error)
            }
        }
    ))

    
        passport.use(new GoogleStrategy({
            clientID:     GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "http://yourdomain:3000/auth/google/callback",
            passReqToCallback   : true
        },
        function(request, accessToken, refreshToken, profile, done) {
            User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return done(err, user);
            });
        }
        ));



    
passport.serializeUser((user, done)=> {
    done(null, user._id);
})


passport.deserializeUser(async(id, done)=> {
    const user = await UserService.getUserById(id);
    done(null, user);
})


}





