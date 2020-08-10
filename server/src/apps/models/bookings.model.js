const mongoose = require('mongoose')
const Schema = mongoose.Schema
const BookingSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    startAt: {type: String, required: true},
    endAt: {type: String, required: true},
    price: {type: Number, required: true},
    roomId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'rooms'},
    customerId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'users'},
    status: { type: String, enum: ['no_confirm', 'confirm', 'refuse', 'success', 'fail', 'cancelled'], required: true, default:'no_confirm'},
    numberCustomer: [
        {
            adults: {type: Number, required: true},
            children: {type: Number, required: true},
        }
    ]
})
const Bookings = mongoose.model('bookings', BookingSchema);
module.exports = Bookings;
