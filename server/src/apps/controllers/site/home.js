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
const fs = require('fs')
const path = require('path');

exports.getUser = async (req, res, next) => {
  const userId = req.user._id;
  try {
    const user = await User.findById(userId);
    if (user) {
      return res.status(201).json({ status: "success", user });
    }
  } catch (error) {
    next(error)
  }
};
exports.editUser = async (req, res, next) => {
  const userId = req.user._id;
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
    await User.updateOne({ _id: userId }, userUpdate);
    return res.status(200).json({ success: true, data: userUpdate })
  } catch (error) {
    next(error)
  }
};
exports.changePassword = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const oldPassword = await User.findOne({ _id: userId }, ["password"]);
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
      await User.updateOne({ _id: userId }, passwordUpdate);
      res.status(200).json({ success: true })
    }
    else { throw new BadRequestException("Password not match") }
  } catch (error) {
    next(error)
  }
};
exports.changeAvatar = async (req, res, next)=>{
    try{
      const image = req.file
      const pathUpload = path.resolve("server", "src", "public", "user_avatar")
      const filePath = "assets/user_avatar/"
      const fileName =image.filename
      const fileRead = fs.readFileSync(image.path)
      await fs.writeFileSync(path.join(pathUpload, fileName), fileRead)
      fs.unlinkSync(image.path)
      const photoURL = filePath + image.filename
      await User.updateOne({_id: req.params.id}, {
        photoURL: photoURL
      })
      return res.status(200).json({photoURL})
    }catch(error){
      next(error)
    }

}
exports.booking = async (req, res, next) => {
  const userId = req.user._id;
  const { status, startAt, endAt } = req.query;
  try {

    const booking = await Booking.find({
      customerId: userId,
      status,
      startAt,
      endAt,
    });
    return res.status(200).json({
      status: "success", data: {
      docs: booking
    } });

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


