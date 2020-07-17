"use strict";

const { Router } = require("express");
const HomeController = require("../apps/controllers/site/home");
const auth = require("../apps/authentication/auth")
const passport = require('passport')

const webRouter = Router();

webRouter.get("/*", HomeController.home);

module.exports = webRouter;
