const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsersSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    email: {type: String, require: true, unique: true},
    name: {type:String, unique: true},
    password: {type: String},
    authType: {type: String, enum: ['local', 'google', 'facebook'], default: 'local'},
    authGoogleID:{type: String, default:null},
    authFacebookID:{type: String, default:null},
    role: {type: Number, required: true},
    phoneNumber: {type: String, required: true},
})
const Users = mongoose.model('users', UsersSchema)
module.exports = Users
