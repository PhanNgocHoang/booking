const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const joi = require("@hapi/joi");
const { jwt_secret} = require("../../../config/default")
const encodeToken = (userID) => {
    return jwt.sign({
        iss: " Tran Hieu ",
        sub: userID,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() +3 )

    }, jwt_secret)
}
const Users = mongoose.model("users");
module.exports.register = async function (req, res, next) {
    const { name, password, email, role , phoneNumber } = req.body;
    const bodySchema = joi.object({
        name: joi.string()
            .min(3)
            .max(30)
            .required(),
        password: joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        email: joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        phoneNumber: joi.number()
            .min(9),
    })
    .unknown();
    const value = await bodySchema.validateAsync(req.body).catch((err) => err);
     if (value instanceof Error) {
      return res.status(403).json({ error: { message: " No add this user " } });
   }
    //check user
    const foundUser = await Users.findOne({ email });
    
    if (foundUser) return res.status(403).json({ error: { message: " Email is already in use " } });
    
    // create new user
    const newUser = new Users({ name, password, email, role })
    newUser.save();
    // Encode
    const token = encodeToken(newUser._id);
    res.setHeader("Authorization", token);
    return res.status(201).json({ success: true }); 
}