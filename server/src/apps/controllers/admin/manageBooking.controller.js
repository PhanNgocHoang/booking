const Bookings = require('../../models/bookings.model')
const User = require('../../models/users.model')
const Room = require('../../models/rooms.model')
const joi = require('@hapi/joi')
joi.objectId = require('joi-objectid')(joi)
const { BadRequestException } = require("../../exceptions/index")

module.exports.GetBookings = async (req, res, next) => {
    try{
        const totalDoc = await Bookings.countDocuments()
        const perPage = 5
        const page = parseInt(req.query.page || 1)
        const skip = (page - 1)* perPage
        const listBookings = await Bookings.find({}, ["_id", "startAt", "endAt", "roomId", "status"]).skip(skip).limit(perPage).populate({path:"roomId", select:"roomName"})
        return res.status(200).json({status:200, data:listBookings, totalPages: totalDoc/perPage})
    }catch (error) {
        next(error)
    }
}
module.exports.DeleteBookings = async (req, res, next)=>{
   try{
    const bookingsId = req.params.id
    await Bookings.deleteOne({_id: bookingsId})
    return res.status(200).json({ status: 200, message: 'Successfully deleted'})
   } catch (error) {
        next(error)
   }
}
module.exports.AddBookings = async (req, res, next) => {
    try{
    const bookingData = joi.object({
        startAt: joi.date().required(),
        endAt: joi.date().required(),
        price: joi.number().required(),
        roomId: joi.objectId().required(),
        status: joi.string().required(),
        customerId: joi.string().email({tlds: {allow: false}}).required(),
        adults: joi.number().required(),
        children: joi.number().required()
        
    }).unknown()
    const newData = await bookingData.validateAsync(req.body)
    const customerId = await User.findOne({email: newData.customerId},["_id"])
    const roomId = await Room.countDocuments({_id: newData.roomId})
    const numberCustomer = [{adults: newData.adults, children: newData.children}]
    if(roomId > 0 && customerId !== null)
    {
        newData.customerId = customerId._id
        newData.numberCustomer = numberCustomer
        const newBookings = new Bookings(newData)
        newBookings.save();
        return res.status(200).json({status: 200, messages:"Successfully"})
    }
    else{throw new BadRequestException('Room or email not exists')}
    
    }catch (error) {
        next(error)
    }
}
module.exports.EditBookings = async (req, res, next) => {
    try{
    const bookingData = joi.object({
        startAt: joi.date().required(),
        endAt: joi.date().required(),
        price: joi.number().required(),
        roomId: joi.objectId().required(),
        status: joi.string().required(),
        customerId: joi.string().email({tlds: {allow: false}}).required(),
        adults: joi.number().required(),
        children: joi.number().required()
        
    }).unknown()
    const newData = await bookingData.validateAsync(req.body)
    const customerId = await User.findOne({email: newData.customerId},["_id"])
    const roomId = await Room.countDocuments({_id: newData.roomId})
    const numberCustomer = [{adults: newData.adults, children: newData.children}]
    if(roomId > 0 && customerId !== null)
    {
        newData.customerId = customerId._id
        newData.numberCustomer = numberCustomer
        await Bookings.updateOne({_id: req.params.id}, newData)
        return res.status(200).json({status: 200, messages:"Successfully"})
    }
    else{throw new BadRequestException('Room or email not exists')}
    
    }catch (error) {
        next(error)
    }
}
module.exports.GetUpdate = async (req, res, next) => {
    try {
        const Booking = await Bookings.findOne({_id: req.params.id}).populate({path: "customerId", select: "email"})
        return res.status(200).json({status: 200, data: Booking})
    } catch (error) {
        next(error)
    }
}