const mongoose = require("mongoose");
const joi = require("@hapi/joi");
const User = mongoose.model("users");
const pagination = require("./../../../lib/pagination");
const { BadRequestException } = require("../../exceptions/index")

module.exports.user = async (req, res, next) => {
  try {
    const { limit, currentPage, skip } = pagination.index(req);
    const totalDocument = await User.find().countDocuments();
    const totalPages = Math.ceil(totalDocument / limit);
    // console.log(totalPages);
    const users = await User.find()
      .sort("-_id")
      .limit(limit)
      .skip(skip)
    return res.status(200).json({ status: "success", data: users, items: { totalDocument, limit }, pages: { currentPage} });
  } catch (error) {
    next(error)
  }
};
module.exports.add_user = async (req, res) => {
  const bodySchema = joi
    .object({
      email: joi.string().required(),
      name: joi.string().required(),
    })
    .unknown();
   const value = await bodySchema.validateAsync(req.body).catch((err) => err);
   if ( value instanceof Error) {
      return res.status(400).json({message: " Not add user !!!"})
   }
    const userNew = new User({
      email: value.email,
      name: value.name,
      password: value.password,
      authType: value.authType,
      authGoogleID: value.authGoogleID,
      authFacebookID: value.authFacebookID,
      role: value.role,
      phoneNumber: value.phoneNumber,
    });
   await userNew.save();
  return res.status(201).json({ status: "success", user: userNew});
};
module.exports.get_user = async (req, res) => {
    const { id } = req.params;  
    const user = await User.findById(id);
  return res.status(201).json({ status: "success", user });
}
module.exports.edit_user = async (req, res) => {
    const { id } = req.params;
     const bodySchema = joi
    .object({
      email: joi.string().required(),
      name: joi.string().required(),
    })
    .unknown();
   const value = await bodySchema.validateAsync(req.body).catch((err) => err);
   if ( value instanceof Error) {
      return res.status(400).json({message: " Not edit user !!!"})
   }
    const userUpdate = {
      email: value.email,
      name: value.name,
      password: value.password,
      authType: value.authType,
      authGoogleID: value.authGoogleID,
      authFacebookID: value.authFacebookID,
      role: value.role,
      phoneNumber: value.phoneNumber,
    };   
    await User.updateOne({ _id: id }, userUpdate);
    return res.status(200).json({success: true})  
};
module.exports.delete_user = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: " Not delete user !!!" })
  }
  const user = await User.findByIdAndDelete(id);
  return res.status(200).json({ success: true })
};
