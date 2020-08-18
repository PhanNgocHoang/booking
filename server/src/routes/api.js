const { Router } = require("express")
const multer = require('multer')
const ManageUserController = require("../apps/controllers/admin/manageUser.controller")
const MangeRoomController = require("../apps/controllers/admin/manageRoom.controller")
const AdminController = require("../apps/controllers/admin/manageUser.controller");
const CommentController = require("../apps/controllers/admin/manageComment.controller");
const check = require("../apps/middlewares/check")
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
const apiRouter = Router()
const upload = multer({storage: storage, limits: {fileSize:1024*1024*10}, fileFilter:fileFilter})
apiRouter.use('/admin', check.checkLogin, check.checkAdmin)
apiRouter.route('/admin/addRoom')
    .post(upload.array('roomImages', 10) ,MangeRoomController.addRoom)
apiRouter.route('/admin/roomDetail/:roomId')
    .get(MangeRoomController.RoomsDetail)
apiRouter.route('/roomUpdate/:roomId')
    .get(MangeRoomController.GetUpdate)
    .put(upload.array('roomImages', 10),MangeRoomController.PostUpdate);
apiRouter.route('/admin/roomDelete/:roomId')
    .delete(MangeRoomController.RoomDelete)
apiRouter.route('admin/RoomBlock/:roomId')
    .put(MangeRoomController.RoomBlock)
apiRouter.route('/admin/GetRoom')
    .get(MangeRoomController.GetRoom)
apiRouter.route('admin/searchRoom')
    .get(MangeRoomController.SearchRoom)
apiRouter.route("/admin/user")
    .get(AdminController.user)
apiRouter.route("/admin/user/add")
    .post(AdminController.add_user)
apiRouter.route("/admin/user/:id")
    .get(AdminController.get_user)
apiRouter.route("/admin/user/edit/:id")
    .get(AdminController.get_user)
    .put(AdminController.edit_user)
apiRouter.route("/admin/user/delete/:id")
    .delete(AdminController.delete_user);
apiRouter.route("/admin/comments")
    .get(CommentController.get_comment)
apiRouter.route("/admin/comments/room/:roomId")
    .get(CommentController.getRoom_comment)
apiRouter.route("/admin/comments/:commentId")
    .get(CommentController.getOne_comment)
    .delete(CommentController.deleteOne_comment);
module.exports = apiRouter