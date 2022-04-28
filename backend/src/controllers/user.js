const { login, register } = require("../models/user")
const { compare, hash } = require("../helpers/bcrypt")
const { generate } = require("../helpers/jwt")
const { success, failed } = require("../helpers/result")

class userController {
   static login = async(req, res) => {
      const { email, password } = req.body
      const result = await login({ email })
      if(result === null) { 
         failed(res, 401, "Can't found any user with this email!") 
      }
      else {
         const checkPassword = compare(password, result.password)
         if(checkPassword === true) { 
            const token = generate(req.body)
            success(res, "Login successful!", { email, password, token })
         }
         else { 
            failed(res, 401, "Wrong password!") 
         }
      }
   }
   static register = async(req, res) => {
      const { email, password } = req.body
      const hashPassword = hash(password)
      const result = await register({ email, password: hashPassword })
      if(result.message === undefined) {
         success(res, "Successfully registered this email!", req.body)
      }
      else {
         failed(res, 400, result.message)
      }
   }
}

module.exports = userController