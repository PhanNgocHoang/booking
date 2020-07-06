const passport = require('passport')
const passportFB = require('passport-facebook').Strategy
const { jwt_secret} = require("../../config/default")
const jwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt')
const Users = require("../models/users.model")

// passport-local
passport.use(new jwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken("Authorization"),
    secretOrKey: jwt_secret
}, async (payload, done) => {
    try {
        console.log("payload", payload);
        const user = await userModel.findById(payload.sub);
        if (!user) return done(null, false)
        done(null,user)
        
    } catch (error) {
        done(error, false)
    }    
}));
// passport-facebook
passport.use(new passportFB({
    clientID: '607424970153093',
    clientSecret: '44cb5fa88954509668a4c047dd7c5d9d',
    callbackURL: 'http://localhost:3000/'
},
(accessToken, refreshToken, profile, done) => {
    console.log(profile)
}
))
