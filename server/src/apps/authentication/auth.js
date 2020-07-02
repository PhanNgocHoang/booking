const passport = require('passport')
const passportFB = require('passport-facebook').Strategy

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