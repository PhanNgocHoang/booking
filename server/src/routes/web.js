"use strict";

const { Router } = require("express");
const HomeController = require("../apps/controllers/site/home");
const auth = require("../apps/authentication/auth")
const passport = require('passport')
const multer = require('multer')
const ClientController = require('../apps/controllers/site/client.controller')
const storage = multer.diskStorage({
  destination: (req, file, cb)=>{
      return cb(null, '/tmp/')
  },
  filename :(req, file, cb) =>{
      return cb(null, new Date().toISOString() + file.originalname)
   }
})
const fileFilter = (req, file, cb) =>{
  //only upload files jpg or png
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
  {return cb(null, true)}
  else{return cb(null, false)}
}
const upload = multer({storage: storage, limits: {fileSize:1024*1024*10}})

const webRouter = Router();

webRouter.route("/user/edit/:id")
  .get(HomeController.getUser)
  .put(HomeController.editUser)
webRouter.route("/user/change-password/:id")
  .put(HomeController.changePassword)
webRouter.route("/user/bookings/:id")
  .get(HomeController.booking)
webRouter.get("/admin/*", HomeController.admin);
webRouter.get("/*", HomeController.client);
webRouter.route("/user/edit")
  .get(HomeController.getUser)
  .put(passport.authenticate("jwt", { session: false }),HomeController.editUser)
webRouter.route("/user/change-password")
  .put(passport.authenticate("jwt", { session: false }),HomeController.changePassword)
webRouter.route("/user/bookings")
  .get(passport.authenticate("jwt", {session: false}), HomeController.booking)
webRouter.route("/user/changeAvatar/:id")
  .post(upload.single('photoURL') ,HomeController.changeAvatar)

module.exports = webRouter;
