"use strict";
const { catchAsync } = require("../../../lib/utils");
const JWT = require('jsonwebtoken');
const mongoose = require("mongoose");
const joi = require("@hapi/joi");
const User = mongoose.model("users");
const pagination = require("./../../../lib/pagination");
const { error } = require("winston");

exports.home = catchAsync(async (req, res) => {
  res.render("index");
});
exports.getUser = async (req, res, next) => {
  const { id } = req.params;
  try { 
    const user = await User.findById(id);
    if (user) {
      return res.status(201).json({ status: "success", user });
    }
  } catch (error) {
    next(error)
  }
}
exports.editUser = async (req, res, next) => {
  const { id } = req.params;
  const bodySchema = joi.object({
    email: joi.string().required(),
    name: joi.string().required(),
    password: joi.string().required(),
    phoneNumber: joi.string(),
    date: joi.date(),
    gender: joi.string(),
    description: joi.string()
    })
    .unknown();
  const value = await bodySchema.validateAsync(req.body);
  const userUpdate = {
    email: value.email,
    name: value.name,
    password: value.password,
    phoneNumber: value.phoneNumber,
    date: value.date,
    gender: value.gender,
    description: value.description,
    address: value.address
  }
  try {
    await User.updateOne({ _id: id }, userUpdate);
    return res.status(200).json({ success: true, data: userUpdate})  
  } catch (error) {
    next(error)
  }   
  
} 
