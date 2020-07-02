"use strict";

const { catchAsync } = require("../../../lib/utils");

exports.home = catchAsync(async (req, res) => {
  res.render("index");
});
exports.authFacebook = catchAsync(async(req, res) => {
  console.log(req.user)
})
