"use strict";

const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const passport = require("passport")
const bodyParser = require("body-parser");

const app = express();

// Http log middleware
app.use(require("../apps/middlewares/http-log")());

// Connect mongodb
require("../lib/mongo-db");

if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}
app.use(passport.initialize())
app.use(passport.session())

app.use(cors());

// Static file
app.use("/assets", express.static(path.resolve("server", "src", "public")));

// Template engine HBS
app.set("views", path.resolve("server", "src", "resources", "views"));
app.set("view engine", "hbs");

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("../routes/web"));
app.use("/auth", require("../routes/api.js"))

// Not match router
app.use("*", require("../apps/middlewares/not-match-router"));

app.use(require("../apps/middlewares/handle-error"));

module.exports = app;
