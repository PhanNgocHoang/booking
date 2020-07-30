const { Router } = require("express")
const AdminController = require("../apps/controllers/admin/manageUser.controller");
const CommentController = require("../apps/controllers/admin/manageComment.controller");

const checkLogin = require("../apps/middlewares/checkLogin")
const apiRouter = Router()
//apiRouter.use('/admin', checkLogin.Login)
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
module.exports = apiRouter;