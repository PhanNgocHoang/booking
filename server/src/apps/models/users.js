const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsersSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true}
})
const Users = mongoose.model('users', UsersSchema)
