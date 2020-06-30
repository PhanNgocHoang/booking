const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CommentsSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    comment_content: {type: String, require: true},
    newID: {type: Schema.Types.ObjectId, required: true, ref: 'news'},
    comment_owner: {type: String, required: true},
    comment_subject: {type: String, required: true},
    createAt: {type:String, required: true},
    updateAt: {type:String, required: true},
    status: {type:Number, required: true},
})