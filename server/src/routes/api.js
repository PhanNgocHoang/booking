const { Router } = require("express")
const AdminController = require("../apps/controllers/admin/manageUser.controller")
const check = require("../apps/middlewares/check")

const apiRouter = Router()
apiRouter.use('/admin', check.checkLogin, check.checkAdmin)
apiRouter.route("/admin")
    .get(AdminController.test)


module.exports = apiRouter