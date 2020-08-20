const Rooms = require('../../models/rooms.model')
const Users = require('../../models/users.model')
const path = require('path')
const fs = require('fs')
const joi = require("@hapi/joi");
const Comments = require('../../models/comments.model')
const { BadRequestException } = require("../../exceptions/index");
module.exports.addRoom = async (req, res, next) => {
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
         Owner: joi.string().email({ tlds: { allow: false } })
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
module.exports.RoomsDetail = async (req, res, next) => {
   try {
      const { roomId } = req.params
      const room = await Rooms.findById(roomId).populate({ path: 'Owner', select: 'name email' })
      const comments = await Comments.find({ roomId: roomId }).populate({ path: 'userId', select: 'name' })
      res.status(200).json({ status: 200, room: room, comment: comments })
   } catch (error) {
      next(error.message)
   }
}
module.exports.RoomDelete = async (req, res, next) => {
   try {
      const roomId = req.params.roomId
      await Rooms.findByIdAndDelete(roomId)
      res.status(200).json({ status: 200, message: "Room deleted successfully" })
   } catch (error) {
      next(error.message)
   }
}
module.exports.RoomBlock = async (req, res, next) => {
   try {
      const roomId = req.params.roomId
      await Rooms.findByIdAndUpdate({ _id: roomId }, { status: 1 })
      res.status(200).json({ status: 200, message: "" })
   } catch (error) {
      next(error.message)
   }
}
module.exports.GetRoom = async (req, res, next) => {
   try {
      const totalPage = await Rooms.countDocuments()
      const perPage = 5
      const page = parseInt(req.query.page || 1)
      const address = req.query.address || {}
      const skip = (page - 1) * perPage
      const query = await Rooms.find({}, ['roomName', 'roomAddress', 'status', 'Owner', 'priceHoliday', 'priceDay',]).skip(skip).limit(perPage).populate({ path: 'Owner', select: 'name' })
      return res.status(200).json({ status: 200, data: query, totalPage: totalPage/perPage })
   } catch (error) {
      next(error.message)
   }
}
module.exports.GetUpdate = async (req, res, next) => {
   try {
      const { roomId } = req.params
      const room = await Rooms.findById(roomId).populate({ path: 'Owner', select: 'email' })
      res.status(200).json({ status: 200, data: room })
   } catch (error) {
      next(error.message)
   }
}
module.exports.PostUpdate = async (req, res, next) => {
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
         Owner: joi.string().email({ tlds: { allow: false } })
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
module.exports.SearchRoom = async (req, res, next) => {
   try {
      const {keySearch} = req.body
      const Result = await Rooms.aggregate([{$match: { $text: { $search: keySearch} }}])
      res.status(200).json({status:200, data: Result})
   } catch (error) {
      next(error)
   }
}
