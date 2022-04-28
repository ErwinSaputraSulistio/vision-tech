class resultStatus {
   static success = (res, message, data) => {
      res.status(200).json({
         status: "OK.",
         message, 
         data 
      })
   }
   static failed = (res, code, error) => {
      res.status(code).json({ 
         code,
         status: "Not OK.",
         error 
      })
   }
}

module.exports = resultStatus