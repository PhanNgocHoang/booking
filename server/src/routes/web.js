"use strict";

const { Router } = require("express");
const HomeController = require("../apps/controllers/site/home");
const auth = require("../apps/authentication/auth")
const passport = require('passport')

const webRouter = Router();

webRouter.route("/user/edit/:id")
  .get(HomeController.getUser)
  .put(HomeController.editUser)
webRouter.route("/user/change-password/:id")
  .put(HomeController.changePassword)
webRouter.route("/user/bookings/:id")
  .get(HomeController.booking)
webRouter.get("/admin/*", HomeController.admin);
webRouter.get("/*", HomeController.client);

webRouter.route("/user/edit")
  .get(HomeController.getUser)
  .put(passport.authenticate("jwt", { session: false }),HomeController.editUser)
webRouter.route("/user/change-password")
  .put(passport.authenticate("jwt", { session: false }),HomeController.changePassword)
webRouter.route("/user/bookings")
  .get(passport.authenticate("jwt", {session: false}), HomeController.booking)

module.exports = webRouter;
