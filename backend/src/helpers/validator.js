const { verify } = require("./jwt")
const { failed } = require("./result")

class validator {
   static checkJwtToken = (req, res, next) => {
      try {
         const token = req.headers.authorization
         if(!token) { failed(res, 403, "Token can't be empty!") }
         else {
            verify(token.substring(7))
            next()
         }
      }
      catch(err) {
         failed(res, 403, err.message)
      }
   }
}

module.exports = validator