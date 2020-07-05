const { catchAsync } = require("../../lib/utils");
const JWT = require('jsonwebtoken')
exports.auth = catchAsync(async (req, res) => {
    const token = encodedToken(req.user.role, req.user.email)
    res.setHeader("Authorization", token)
    return res.status(200).json({success: true})
  
  })
  const encodedToken = (role, email) =>{
    return JWT.sign({
      iss: email,
      sub: role,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 3)
    }, 'WebBooking@123')
  }