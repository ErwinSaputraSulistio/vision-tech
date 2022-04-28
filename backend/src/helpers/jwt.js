const jwt = require("jsonwebtoken")

class jwtHandler {
   static generate = (payload) => {
      return jwt.sign(payload, "secret")
   }
   static verify = (token) => {
      return jwt.verify(token, "secret")
   }
}

module.exports = jwtHandler