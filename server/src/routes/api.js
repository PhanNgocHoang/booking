const { Router } = require("express")
const AdminController = require("../apps/controllers/admin/manageUser.controller")
const checkLogin = require("../apps/middlewares/checkLogin")

const apiRouter = Router()
apiRouter.use('/admin', checkLogin.Login)
apiRouter.route("/admin")
    .get(AdminController.test)


module.exports = apiRouter