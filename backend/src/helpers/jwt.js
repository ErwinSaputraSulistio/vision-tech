const jwt = require("jsonwebtoken")
const JWT_SECRET = "secret"

class jwtHandler {
   static generate = (payload) => {
      return jwt.sign(payload, JWT_SECRET)
   }
   static verify = (token) => {
      return jwt.verify(token, JWT_SECRET)
   }
}

module.exports = jwtHandler