const express = require('express')
const app = express()
const db = require('./server/config/db')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const cors=require('cors')
app.use(cors())
const adminRoutes = require("./server/routes/adminRoutes")
app.use('/admin', adminRoutes)
app.listen(5000, (err) => {
  if (err) {
    console.log("Error Occured", err)
  }
  else {
    console.log("SERVER IS RUNNING")
  }
})