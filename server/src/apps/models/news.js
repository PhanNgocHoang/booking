const mongoose = require('mongoose')
const Schema = mongoose.Schema
const NewsSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    title: {type:String, require: true},
    images: {type: Array},
    content: {type: String, require: true},
    status: {type: Number},
    views: {type: Number},
    owner: {type: mongoose.Schema.Types.ObjectId, require: true, ref: 'users'},
    createAt: {type: String, require: true},
    updateAt: {type: String, require: true},
    categoryID: {type: mongoose.Schema.Types.ObjectId, require: true, ref: 'categories'},
})
const News = mongoose.model('news', NewsSchema)