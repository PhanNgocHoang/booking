const User = require('../../models/users.model')
const Rooms = require('../../models/rooms.model')
const Bookings = require('../../models/bookings.model')
const joi = require("@hapi/joi")
module.exports.GetRoom = async (req, res, next) => {
    try {
      const totalPage = await Rooms.countDocuments()
      const perPage = 10
      const page = parseInt(req.query.page || 1)
      const address = req.query.address || {}
      const skip = (page - 1) * perPage
      const data = await Rooms.find({},['roomName', 'roomAddress', 'status', 'Owner', 'priceHoliday', 'priceDay', 'roomImages',]).skip(skip).limit(perPage).populate({ path: 'Owner', select: 'name' }).sort({_id: -1})
      return res.status(200).json({ status: 200, data: data, totalPage: totalPage/perPage })
   } catch (error) {
      next(error)
   }
}
module.exports.getRoomDetail = async (req, res, next) => {
    try {
        const data = await Rooms.findOne({_id: req.params.roomId}).populate({ path: 'Owner', select: 'name', select: 'email'})
        return res.status(200).json({status:200, data:data})
    } catch (error) {
        next(error)
    }
}
module.exports.GetListMyRoom = async (req, res, next) => {
    try {
        const totalPage = await Rooms.countDocuments()
        const perPage = 10
        const page = parseInt(req.query.page || 1)
        const skip = (page - 1) * perPage
        const data = await Rooms.find({},['roomName', 'roomAddress', 'status', 'priceHoliday', 'priceDay',]).skip(skip).limit(perPage)
        return res.status(200).json({ status: 200, data: data, totalPage: totalPage/perPage})
    } catch (error) {
        next(error)
    }
}
module.exports.AddMyRoom = async (req, res, next) => {
    try {
        let roomImage = []
        const Time = new Date().toISOString()
        const roomData = joi.object({
           roomName: joi.string().alphanum().required(),
           roomAddress: joi.string().required(),
           roomPhone: joi.string().required(),
           status: joi.number().min(0).max(1).required(),
           priceHoliday: joi.number().required(),
           priceDay: joi.number().required(),
           description: joi.string().required(),
        }).unknown()
        const newData = await roomData.validateAsync(req.body)
        const ownerId = await Users.findOne({ email: newData.Owner }, ['_id'])
        if (ownerId) {
           newData.Owner = ownerId._id
           const pathUpload = path.resolve("server", "src", "public", "roomImage")
           let filePath = "assets/roomImage/"
           for (const image of req.files) {
              const fileRead = await fs.readFileSync(image.path)
              const fileName = Time + image.originalname
              await fs.writeFileSync(path.join(pathUpload, fileName), fileRead)
              fs.unlinkSync(image.path)
              const imageUpload = {
                 imageName: fileName,
                 folderSave: filePath
              }
              roomImage.push(imageUpload)
           }
           newData.roomImages = roomImage
           const newRoom = new Rooms(newData)
           await newRoom.save()
           newData.Owner = req.body.Owner
           res.status(200).json({ status: 200, newData })
        }
        if (ownerId === null) throw new BadRequestException('Email not exist')
     } catch (error) {
        next(error.message)
     }
}
module.exports.UpdateMyRoom = async (req, res, next) => {
    try {
        const { roomId } = req.params
        const pathUpload = path.resolve("server", "src", "public", "roomImage")
        const ImageDel = new Array()
        let roomImage = []
        const Time = new Date().toISOString()
        let roomOldImage = req.session.ImageDel
        const roomData = joi.object({
           roomName: joi.string().alphanum().required(),
           roomAddress: joi.string().required(),
           roomPhone: joi.string().required(),
           status: joi.number().min(0).max(1).required(),
           priceHoliday: joi.number().required(),
           priceDay: joi.number().required(),
           description: joi.string().required(),
        }).unknown()
        let newData = await roomData.validateAsync(req.body)
        const owner = await Users.find({ email: newData.Owner }, ['_id'])
        for (let image of roomOldImage) {
           const pathImage = path.join(pathUpload, image.imageName)
           fs.unlinkSync(pathImage)
           ImageDel.push(image._id)
        }
        if (owner) {
           newData.Owner = owner._id
           const pathUpload = path.resolve("server", "src", "public", "roomImage")
           let filePath = "assets/roomImage/"
           for (const image of req.files) {
              const fileRead = await fs.readFileSync(image.path)
              const fileName = Time + image.originalname
              await fs.writeFileSync(path.join(pathUpload, fileName), fileRead)
              fs.unlinkSync(image.path)
              const imageUpload = {
                 imageName: fileName,
                 folderSave: filePath
              }
              roomImage.push(imageUpload)
           }
           await Rooms.update({ _id: roomId }, newData)
           await Rooms.update({ _id: roomId }, {$push: {'roomImages': roomImage}})
           await Rooms.update({_id: roomId}, { $pull: { 'roomImages': { _id: { $in: ImageDel } } }}, { safe: true, multi:true })
           newData.Owner = req.body.Owner
           res.status(200).json({ status: 200, newData: newData})
           }
         if (owner === null) throw new BadRequestException('Email not exist')
  
     } catch (error) {
        next(error)
     }
}
module.exports.FilterBooking = async (req, res, next)=>{
   try {
      const bookingFilter = joi.object({
         startAt: joi.date().required(),
         endAt: joi.date().required(),
         roomAddress: joi.string().required()
      })
      const newData = await bookingFilter.validateAsync(req.body)

      const perPage = 5
      const page = parseInt(req.query.page || 1)
      const skip = (page - 1) * perPage
      const dataBooking = await Bookings.find({startAt:{$gt: newData.startAt, $lt: newData.endAt}}, ['roomId'])
      let ArrayRoomId = []
      for (const roomId of dataBooking) {
         ArrayRoomId.push(roomId.roomId)
      }
      const room = await Rooms.find({roomAddress: newData.roomAddress ,_id: {$nin: ArrayRoomId}}, ["roomName", "roomAddress","roomImages", "priceDay", "priceHoliday"]).skip(skip).limit(perPage)
      const totalRoom = await Rooms.countDocuments({roomAddress: newData.roomAddress ,_id: {$nin: dataBooking.roomId}})
      return res.status(200).json({ status: 200, data: room, totalPages: totalRoom/perPage})
   } catch (error) {
      next(error)
   }
}
module.exports.Bookings = async (req, res, next) => {
   try {
      const bookingFilter = joi.object({
         startAt: joi.date().required(),
         endAt: joi.date().required(),
      })
      const roomId = req.params.roomId
      const newData = await bookingFilter.validateAsync(req.body)
      const booking = await Bookings.countDocuments({roomId: roomId ,startAt:{$gt: newData.startAt, $lt: newData.endAt}})
      if(booking === 0)
      {
         return res.status(200).json({status: 200, message:"Successfully"})
      }
      if(booking > 0)
      {
         return res.status(406).json({status: 406, message: "Invalid booking"})
      }
   } catch (error) {
      
   }
}
