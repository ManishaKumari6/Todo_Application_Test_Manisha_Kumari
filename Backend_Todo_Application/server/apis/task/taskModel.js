const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    autoId: { type: Number, default: 0 },
    title: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now },
    status: { type: Boolean, default: true },
})

module.exports = mongoose.model('task', taskSchema)