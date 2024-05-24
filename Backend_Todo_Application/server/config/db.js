const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/Todo_Application_DB")
    .then(() => {
        console.log("DATABASE IS CONNECTED")
    })
    .catch((err) => {
        console.log("Error Occured", err)
    })