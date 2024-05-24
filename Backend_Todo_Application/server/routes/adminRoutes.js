const router = require('express').Router()
const taskController = require('../apis/task/taskController')

//task routes
router.post("/task/add", taskController.add)
router.post("/task/all", taskController.all)
router.post("/task/single", taskController.single)
router.post("/task/delete", taskController.del)
//task routes

router.all("*", (req, res) => {
    res.send({
        success: false,
        status: 404,
        message: "Invalid Address"
    })
})

module.exports = router