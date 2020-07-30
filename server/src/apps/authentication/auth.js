const passport = require('passport')
const passportFB = require('passport-facebook-token')
const GooglePlusToken = require('passport-google-plus-token')
const Users = require('../models/users.model')
const LocalUser = require('passport-local')
const bcrypt = require('bcryptjs')
const { jwt_secret } = require("../../config/default")
const jwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt');

const { BadRequestException } = require("../exceptions")

// passport-local
passport.use(new jwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken("Authorization"),
    secretOrKey: jwt_secret
}, async (payload, done) => {
    try {
        console.log("payload", payload);
        const user = await userModel.findById(payload.sub);
        if (!user) return done(null, false)
        done(null, user)

    } catch (error) {
        done(error, false)
    }
}));
// passport-facebook
passport.use(new passportFB({
    clientID: '607424970153093',
    clientSecret: '44cb5fa88954509668a4c047dd7c5d9d',
    callbackURL: 'http://localhost:3000/auth/facebook',
},
    async (accessToken, refreshToken, profile, done) => {
        try {
            const user = await Users.findOne({ authFacebookID: profile.id, authType: "facebook" })
            if (user) return done(null, user)
            const newUser = new Users({
                authType: profile.provider,
                email: profile.emails[0].value,
                authFacebookID: profile.id,
                role: 1,
                name: profile.displayName,
            })
            await newUser.save()
            return done(null, newUser)
        } catch (error) {
            done(error, false)
        }
    }
))
//passport google
passport.use(new GooglePlusToken({
    clientID: '780623253516-j9egbkc2repjf39tgaosol1lfm63lntt.apps.googleusercontent.com',
    clientSecret: 'btddoB7SgNgRzsAOkBdz1BkF',
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await Users.findOne({ authGoogleID: profile.id, authType: "google" })
        if (user) return done(null, user)
        const newUser = new Users({
            authType: "google",
            email: profile.emails[0].value,
            authGoogleID: profile.id,
            role: 1,
            name: profile.displayName,
        })
        await newUser.save()
        return done(null, newUser)
    } catch (error) {
        done(error, false)
    }
},
))
//passport local
passport.use(new LocalUser(async (username, password, done) => {
    console.log("password", password)
    console.log("username", username)
    try {
        const user = await Users.findOne({ email: username, authType: "local" })

        if (user && bcrypt.compare(password, user.password)) {
            return done(null, user)
        }

        if (!user) throw new BadRequestException("email or pass wrong")

    } catch (error) {
        return done(error, false)
    }
}))
