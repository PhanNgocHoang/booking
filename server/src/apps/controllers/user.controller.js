const { catchAsync } = require("../../lib/utils");
const JWT = require('jsonwebtoken')
exports.authFacebook = catchAsync(async (req, res) => {
    const token = encodedToken(req.user.id, req.user.email)
    res.setHeader("Authorization", token)
    return res.status(200).json({success: true})
  
  })
  const encodedToken = (UserID, email) =>{
    return JWT.sign({
      iss: email,
      sub: UserID,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 3)
    }, 'WebBooking@123')
  }