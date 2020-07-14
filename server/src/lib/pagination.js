const express = require("express");
require("./../apps/controllers/admin/manageUser.controller")
module.exports.index = (req) => {
  const currentPage = parseInt(req.query.page || 1);
  const limit = req.query.limit || 2;
  const skip = (currentPage - 1) * limit;
  const next = currentPage +1;
  const prev = currentPage - 1;
  return { limit, currentPage, skip, next , prev}
  }

