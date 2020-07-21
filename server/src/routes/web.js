"use strict";

const { Router } = require("express");
const HomeController = require("../apps/controllers/site/home");
const auth = require("../apps/authentication/auth")
const passport = require('passport')

const webRouter = Router();

webRouter.get("/", HomeController.home);
webRouter.route("/user/edit/:id")
  .get(HomeController.getUser)
  .put(HomeController.editUser)
webRouter.route("/user/change-password/:id")
  .put(HomeController.changePassword)
module.exports = webRouter;
