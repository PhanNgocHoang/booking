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
    phoneNumber: {type: String, required: true},
});
// ma hoa
UsersSchema.pre("save", async function(next) {
    try {
        console.log("pass",this.password);
        
        // generate a salt
        const salt = await bcrypt.genSalt(10);
       console.log("salt",salt);
        
        // generate a pass hash 
        const passwordHashed = await bcrypt.hash(this.password, salt);
        console.log("Hash",passwordHashed);
        
        // re-assign pass hashed
        this.password = passwordHashed;
   //     return false;
    } catch (error) {
        next(error)
    }
})

const Users = mongoose.model('users', UsersSchema)
module.exports = Users;
