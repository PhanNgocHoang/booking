"use strict";

const { Router } = require("express");
const HomeController = require("../apps/controllers/site/home");
const auth = require("../apps/authentication/auth")
const passport = require('passport')

const webRouter = Router();

<<<<<<< HEAD
webRouter.route("/user/edit/:id")
  .get(HomeController.getUser)
  .put(HomeController.editUser)
webRouter.route("/user/change-password/:id")
  .put(HomeController.changePassword)
webRouter.route("/user/bookings/:id")
  .get(HomeController.booking)
webRouter.get("/admin/*", HomeController.admin);
webRouter.get("/*", HomeController.client);
=======
webRouter.get("/*", HomeController.home);
>>>>>>> dc81eed0fd92f16bafa6cf75090b55d273f074a7

module.exports = webRouter;
