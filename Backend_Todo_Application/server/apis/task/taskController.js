const taskModel = require('./taskModel')
const add = async (req, res) => {
    let validation = ""
    if (!req.body.title) {
        validation += "title is Required"
    }
    if (!!validation) {
        res.send({
            success: false,
            status: 400,
            message: "Validation Error:" + validation
        })
    }
    else {
        let prevtask = await taskModel.findOne({ title: req.body.title })
        if (prevtask == null) {
            let total = await taskModel.countDocuments()
            let obj = new taskModel()
            obj.autoId = total + 1
            obj.title = req.body.title
            obj.save()
                .then((result) => {
                    res.send({
                        success: true,
                        status: 200,
                        message: "New Task Added",
                        data: result
                    })
                })
                .catch((err) => {
                    res.send({
                        success: false,
                        status: 500,
                        message: "Error Occured:" + err.message

                    })
                })
        }
        else {
            res.send({
                success: false,
                status: 400,
                message: "Task Already Exists with same title "
            })
        }
    }
}


const all = (req, res) => {
    req.body.status = true
    taskModel.find(req.body).exec()
        .then((result) => {
            res.send({
                success: true,
                status: 200,
                message: "All task Loaded",
                data: result,
                total: result.length
            })
        })
        .catch((err) => {
            res.send({
                success: false,
                status: 500,
                message: err.message

            })
        })
}


const single = (req, res) => {
    let validation = ""
    if (!req.body._id) {
        validation = "_id is Required"
    }

    if (!!validation) {
        res.send({
            success: false,
            status: 400,
            message: "Validation Error:" + validation
        })
    }
    else {
        taskModel.findOne({ _id: req.body._id }).exec()
            .then((result) => {
                if (result == null) {
                    res.send({
                        success: false,
                        status: 400,
                        message: "Task does not exist"
                    })
                }
                else {
                    res.send({
                        success: true,
                        status: 200,
                        message: "Single task",
                        data: result
                    })
                }
            })
            .catch((err) => {
                res.send({
                    success: false,
                    status: 500,
                    message: err.message
                })
            })
    }
}





const del = (req, res) => {
    let validation = ""
    if (!req.body._id) {
        validation += "_id is required"
    }


    if (!!validation) {
        res.send({
            success: false,
            status: 400,
            message: "Validation Error : " + validation
        })
    }
    else {
        taskModel.findOne({ _id: req.body._id }).exec()
            .then(taskData => {
                if (taskData == null) {
                    res.send({
                        success: false,
                        status: 400,
                        message: "Task does not exist"
                    })
                }
                else {
                    taskData.status = false

                    taskData.save()
                        .then(updatedData => {
                            res.send({
                                success: true,
                                status: 200,
                                message: "Data deleted",
                                data: updatedData
                            })
                        })
                        .catch(err => {
                            res.send({
                                success: false,
                                status: 500,
                                message: err.message
                            })
                        })
                }
            })
            .catch(err => {
                res.send({
                    success: false,
                    status: 500,
                    message: err.message
                })
            })
    }
}

module.exports = { add, all, single, del }