const mongoose = require('mongoose')
const Schema = mongoose.Schema
const RoomsSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    roomName: {type:String, require: true},
    roomAddress: {type:String, require: true},
    roomPhone: {type:String, require: true},
    status: {type: Number},
    roomImages: {type:Array, require: true},
    priceHoliday: {type: Number, required: true},
    priceDay: {type: Number, required: true},
    description: {type: String, require: true},
    Owner: {type: mongoose.Schema.Types.ObjectId, required: true, ref:'users'},
})
const Rooms = mongoose.model('rooms', RoomsSchema)