const mongoose = require('mongoose')
const Schema = mongoose.Schema
const HotelSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    hotelName: {type:String, require: true},
    hotelAddress: {type:String, require: true},
    hotelPhone: {type:String, require: true},
    status: {type: Number},
    hotelImages: {type:Array, require: true},
    rooms:[
        {
            roomId: {type: String, required: true},
            number: {type: Number, required: true},
            floor: {type: Number, required: true},
            price: {type: Number, required: true},
            image: {type: Array, required: true},
        }
    ],
    Owner: {type: mongoose.Schema.Types.ObjectId, required: true, ref:'users'},
})
const Hotel = mongoose.model('news', HotelSchema)