const db = require("../configs/db")

const userSchema = new db.Schema(
   {
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true }
   }, 
   { timestamps: true, collection: "user" }
)

const user = db.model("user", userSchema)

class userModel {
   static login = async(data) => {
      try {
         const login = await user.findOne(data)
         return login
      }
      catch(err) {
         return err
      }
   }
   static register = async(data) => {
      try {
         const register = await user.create(data)
         return register
      }
      catch(err) {
         return err
      }
   }
}

module.exports = userModel