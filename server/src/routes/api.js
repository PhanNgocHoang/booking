"use strict";
const { Router } = require("express");
const userController = require("../apps/controllers/site/user.controller")
const apiRouter = Router();

apiRouter.route("/register")
    .post(userController.register);

module.exports = apiRouter;

