const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CategoriesSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    cat_name: {type: String, require: true}
})
const Categories = mongoose.model('categories', CategoriesSchema)