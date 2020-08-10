"use strict";

const { Router } = require("express");
const HomeController = require("../apps/controllers/site/home");
const auth = require("../apps/authentication/auth")
const passport = require('passport')

const webRouter = Router();

webRouter.get("/", HomeController.home);
webRouter.route("/user/edit")
  .get(HomeController.getUser)
  .put(passport.authenticate("jwt", { session: false }),HomeController.editUser)
webRouter.route("/user/change-password")
  .put(passport.authenticate("jwt", { session: false }),HomeController.changePassword)
webRouter.route("/user/bookings")
  .get(passport.authenticate("jwt", {session: false}), HomeController.booking)
module.exports = webRouter;
