const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const routes = require('./src/routes')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/api", routes)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})