const JWT = require('jsonwebtoken');
const findUser = require('../models/users.model')
const { jwt_secret} = require("../../config/default.js")
module.exports.checkLogin = (req, res, next) =>{
    const tokenKey = req.headers.authorization
    if(tokenKey){
        JWT.verify(tokenKey, jwt_secret, async (err, decoded) => {
            global.userInfo = decoded
            if(!decoded)
            {
                return res.status(400).json({message:"You are not authorized"})
            }
            else{
                const user = await findUser.findUser(decoded.iss, decoded.sub)
                if(user == 1) return next()
                else return res.status(400).json({message:"You are not authorized"})
            }
        })
    }
    else{
        return res.status(400).json({message:"You are not authorized"})
    }
}
module.exports.checkAdmin = (req, res, next)=>{
    const userRole = userInfo.sub
    if(userRole == 0)
    {
        return next()
    }
    const message = "You must be an administrator to continue"
    return res.status(400).json({message:message})
}