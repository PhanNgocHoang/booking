const mongoose = require('mongoose')
const Schema = mongoose.Schema
const BookingSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    startAt: {type: String, required: true},
    endAt: {type: String, required: true},
    price: {type: Number, required: true},
    hotelId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'hotel'},
    roomId: {type: mongoose.Schema.Types.ObjectId, required: true},
    customerId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'users'},
    status: {type: String, required: true},
    numberCustomer: [
        {
            adults: {type: Number, required: true},
            children: {type: Number, required: true},
        }
    ]
})
const Booking = mongoose.model('booking', BookingSchema)