const mongoose = require("mongoose");
const joi = require("@hapi/joi");
const User = mongoose.model("users");
const Comment = mongoose.model("comments");
const pagination = require("./../../../lib/pagination");
const { BadRequestException } = require("../../exceptions/index");
module.exports.get_comment = async (req, res) => {
   try {
    const { limit, currentPage, skip , next, prev } = pagination.index(req);
    const totalDocument = await Comment.find().countDocuments();
    const totalPages = Math.ceil(totalDocument / limit);
    const comments = await Comment.find({})
      .sort("-_id")
      .limit(limit)
      .skip(skip)
    return res.status(200).json({ status: "success", data: comments, items: { totalDocument, limit }, pages: { currentPage , next , prev} });
  } catch (error) {
     next(error);
  }
}
module.exports.getRoom_comment = async (req, res, next) => {
  try {
    const { roomId } = req.params;
    const comments = await Comment.find({roomId});
    return res.status(200).json({ status: "success", comments });  
  } catch (error) {
    next(error);
  }
};
module.exports.getOne_comment = async (req, res, next) => {
  try {
    const { commentId } = req.params;
    const comment = await Comment.findById(commentId);
    if (comment) {
      return res.status(200).json({ status: "success", comment });
    }
  } catch (error) {
    next(error)
  }   
};
module.exports.deleteOne_comment = async (req, res, next) => {
  try {
    const { commentId } = req.params;
    if (mongoose.Types.ObjectId.isValid(commentId)) {
      await Comment.findByIdAndDelete(commentId);
      return res.status(200).json({ success: true })
    }
    throw error;
  } catch (error) {
    next(error)
  }
};
