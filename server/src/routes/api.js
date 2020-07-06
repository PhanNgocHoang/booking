"use strict";
const { Router } = require("express");
const UserController = require("../apps/controllers/user.controller");
const auth = require("../apps/authentication/auth")
const passport = require('passport')

const apiRouter = Router();
apiRouter.route('/facebook')
    .post(passport.authenticate('facebook-token', {session: false}), UserController.authentication)
apiRouter.route('/google')
    .post(passport.authenticate('google-plus-token', {session: false}), UserController.authentication)
apiRouter.route('/local')
    .post(passport.authenticate('local', {session: false}), UserController.authentication)


module.exports = apiRouter;