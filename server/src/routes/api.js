const { Router } = require("express")
const multer = require('multer')
const ManageUserController = require("../apps/controllers/admin/manageUser.controller")
const MangeRoomController = require("../apps/controllers/admin/manageRoom.controller")
const check = require("../apps/middlewares/check")
const apiRouter = Router()
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
    if(file.mimetype === 'image/jpeg' ||file.mimetype === 'image/png')
    {return cb(null, true)}
    else{return cb(null, false)}
}
const upload = multer({storage: storage, limits: {fileSize:1024*1024*10}, fileFilter:fileFilter})
apiRouter.use('/admin', check.checkLogin, check.checkAdmin)
apiRouter.route("/admin")
    .get(ManageUserController.test)
apiRouter.route('/admin/addRoom')
    .post(upload.array('roomImages', 10) ,MangeRoomController.addRoom)
apiRouter.route('/admin/roomDetail/:roomId')
    .get(MangeRoomController.RoomsDetail)
apiRouter.route('/roomUpdate/:roomId')
    .get(MangeRoomController.GetUpdate)
    .put(upload.array('roomImages', 10),MangeRoomController.PostUpdate);
apiRouter.route('/admin/roomDelete/:roomId')
    .delete(MangeRoomController.RoomDelete)
apiRouter.route('admin//RoomBlock/:roomId')
    .put(MangeRoomController.RoomBlock)
apiRouter.route('/admin/GetRoom')
    .get(MangeRoomController.GetRoom)

module.exports = apiRouter