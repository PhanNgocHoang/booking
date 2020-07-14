const { Router } = require("express")
const AdminController = require("../apps/controllers/admin/manageUser.controller")
const checkLogin = require("../apps/middlewares/checkLogin")

const apiRouter = Router()
apiRouter.use('/admin', checkLogin.Login)
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
module.exports = apiRouter;