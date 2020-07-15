const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CommentsSchema = mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    roomId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'rooms'},
    userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'users'},
    commentContent: { type: String, required: true},
    createAt: {type: String, required: true},
    updateAt: {type: String, required: true}
})
const Comments = mongoose.model('comments', CommentsSchema)