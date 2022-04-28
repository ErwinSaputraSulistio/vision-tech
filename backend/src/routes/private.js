const router = require("express").Router()
const { checkJwtToken } = require("../helpers/validator")

router.use("/", checkJwtToken, (req, res) => { 
   res.json({ 
      code: 200,
      status: "--> OK.",
      message: "JWT token is valid, successfully entered the private route." 
   }) 
})

module.exports = router