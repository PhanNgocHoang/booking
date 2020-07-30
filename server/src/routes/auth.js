"use strict";
const { Router } = require("express");
const UserController = require("../apps/controllers/user.controller");
const auth = require("../apps/authentication/auth")
const passport = require('passport')

const authRouter = Router();
authRouter.route('/facebook')
    .post(passport.authenticate('facebook-token', {session: false}), UserController.authentication)
authRouter.route('/google')
    .post(passport.authenticate('google-plus-token', {session: false}), UserController.authentication)
authRouter.route('/local')
    .post(passport.authenticate('local', {session: false}), UserController.authentication)
authRouter.route("/register")
    .post(UserController.register)


module.exports = authRouter;
