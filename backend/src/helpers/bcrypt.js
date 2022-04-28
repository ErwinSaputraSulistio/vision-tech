const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)

class bcryptHelper {
   static compare = (passwordFromInput, passwordFromDatabase) => {
      return bcrypt.compareSync(passwordFromInput, passwordFromDatabase)
   }
   static hash = (password) => {
      return bcrypt.hashSync(password, salt)
   }
}

module.exports = bcryptHelper