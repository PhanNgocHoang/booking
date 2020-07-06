const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CommentsSchema = mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    hotelId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'hotels'},
    userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'users'},
    commentContent: { type: String, required: true},
    createAt: {type: String, required: true}
})
const Comments = mongoose.model('comments', CommentsSchema)