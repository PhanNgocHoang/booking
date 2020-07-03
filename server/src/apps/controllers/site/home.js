"use strict";

const { catchAsync } = require("../../../lib/utils");
const JWT = require('jsonwebtoken')

exports.home = catchAsync(async (req, res) => {
  res.render("index");
});

