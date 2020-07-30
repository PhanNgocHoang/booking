"use strict";
const { catchAsync } = require("../../../lib/utils");
const { BadRequestException } = require("../../exceptions")
const JWT = require('jsonwebtoken');
const mongoose = require("mongoose");
const joi = require("@hapi/joi");
const bcrypt = require('bcryptjs');
const User = mongoose.model("users");
const pagination = require("./../../../lib/pagination");
const Booking = require("../../models/bookings.model");

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
};
exports.editUser = async (req, res, next) => {
  const { id } = req.params;
  const bodySchema = joi.object({
    email: joi.string().required(),
    name: joi.string().required(),
    //  password: joi.string().required(),
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
    //  password: value.password,
    phoneNumber: value.phoneNumber,
    date: value.date,
    gender: value.gender,
    description: value.description,
    address: value.address
  }
  try {
    await User.updateOne({ _id: id }, userUpdate);
    return res.status(200).json({ success: true, data: userUpdate })
  } catch (error) {
    next(error)
  }
};
exports.changePassword = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldPassword = await User.findOne({ _id: id }, ["password"]);
    const { password, newPassword, newPassword_confirmation } = req.body;
    const bodySchema = joi.object({
      password: joi.string().required(),
      newPassword_confirmation: joi.string().required(),
      newPassword: joi.ref('newPassword_confirmation')
    })
      .unknown();
    const value = await bodySchema.validateAsync(req.body);
    const comparePass = bcrypt.compareSync(password, oldPassword.password)
    if (comparePass == true) {
      const passwordUpdate = {
        password: bcrypt.hashSync(value.newPassword, 10)
      }
      await User.updateOne({ _id: id }, passwordUpdate);
      res.status(200).json({ success: true })
    }
    else { throw new BadRequestException("Password not match") }
  } catch (error) {
    next(error)
  }
};
exports.booking = async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.query;
  try {
    const booking = await Booking.find({ customerId: id, status: status });
    if (booking && status) {
      return res.status(200).json({ status: "success", booking });
    }
  } catch (error) {
    next(error)
  }
};


exports.admin = catchAsync(async (req, res) => {
  res.render("cms");
});

exports.client = catchAsync(async (req, res) => {
  res.render("index");
});


