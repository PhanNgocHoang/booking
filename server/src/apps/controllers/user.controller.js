const { catchAsync } = require("../../lib/utils");
const JWT = require("jsonwebtoken");
const joi = require("@hapi/joi");
const { jwt_secret } = require("../../config/default.js");
const User = require("../models/users.model");
const encodedToken = (role, email, id) => {
  return JWT.sign(
    {
      iss: email,
      id,
      sub: role,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 3),
    },
    jwt_secret
  );
};
exports.authentication = catchAsync(async (req, res) => {
  const token = encodedToken(req.user.role, req.user.email, req.user.id);
  res.setHeader("Authorization", token);
  return res.status(200).json({ success: true, token });
});
module.exports.register = async function (req, res, next) {
  try {
    const { name, password, email, role, phoneNumber } = req.body;
    console.log(req.body);
    const bodySchema = joi.object({
      name: joi.string().min(3).max(30).required(),
      password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
      email: joi
        .string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
      phoneNumber: joi.number().min(9),
    });
    //check user
    const foundUser = await User.findOne({ email });
    if (foundUser)
      return res
        .status(403)
        .json({ error: { message: " Email is already in use " } });
    // create new user
    const newUser = new User({ name, password, email, role, phoneNumber });
    newUser.save();
    return res.status(201).json({ success: true }, newUser);
  } catch (error) {
    next(error);
  }
};

