const express = require('express')
const router = require('./src/routes/userRoutes')
const path = require('path')
const app = express()
const port = 3000


app.use(router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})