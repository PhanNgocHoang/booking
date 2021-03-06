const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require("bcryptjs")

const UsersSchema = new Schema({
     _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    email: {type: String, require: true, unique: true},
    name: {type:String, unique: true},
    password: {type: String},
    authType: {type: String, enum: ['local', 'google', 'facebook'], default: 'local'},
    authGoogleID:{type: String, default:null},
    authFacebookID:{type: String, default:null},
    role: {type: Number, required: true},
    phoneNumber: { type: String, required: true },
    address: { type: String },
    date: { type: Date },
    gender: { type: String, enum: ['Male', 'Female', 'Other'] },
    description: { type: String },
    photoURL: { type: String, required: true}
});
// ma hoa
UsersSchema.pre("save", async function(next) {
    try {
        if(this.authType !== "local") return next();
        // generate a salt
        const salt = await bcrypt.genSalt(10);
        // generate a pass hash 
        const passwordHashed = await bcrypt.hash(this.password, salt);
      this.password = passwordHashed;
   //     return false;
    } catch (error) {
        next(error)
    }
        
});
const Users = mongoose.model('users', UsersSchema)
module.exports = Users
module.exports.findUser = async (email, role) =>{
    const user = await Users.countDocuments({email: email, role: role})
    return user
}
