const router = require("express").Router()

router.use("/", (req, res) => { 
   res.json({ 
      code: 200,
      status: "--> OK.",
      message: "This is the public route. You can access this route, even without JWT token or login. (accessable for all people)" 
   }) 
})

module.exports = router