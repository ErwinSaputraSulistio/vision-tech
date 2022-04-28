const router = require("express").Router()
const user = require("../controllers/user")
const private = require("../routes/private")
const public = require("../routes/public")

router.post("/login", user.login)
router.post("/register", user.register)
router.use("/private", private)
router.use("/public", public)

module.exports = router