const mongoose = require('mongoose')
const Schema = mongoose.Schema
const RoomsSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    roomName: {type:String, require: true},
    roomAddress: {type:String, require: true},
    roomPhone: {type:String, require: true},
    status: {type: Number},
    roomImages: [
        {
            _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
            imageName: {type: String, require: true},
            folderSave: {type: String, require: true}
        }
    ],
    priceHoliday: {type: Number, required: true},
    priceDay: {type: Number, required: true},
    description: {type: String, require: true},
    Owner: {type: mongoose.Schema.Types.ObjectId, required: true, ref:'users'},
})
RoomsSchema.index({ '$**': 'text' })
const Rooms = mongoose.model('rooms', RoomsSchema)
module.exports = Rooms