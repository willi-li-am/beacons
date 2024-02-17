//mongoose to create user model
const mongoose = require ('mongoose');
const {Schema} = mongoose

const UserSchema = new Schema({
    email: {type:String , required: true, unique: true},
    name: {type:String, required: true},
    password: {type:String, required: true},
    friends :{type:[String], required:false},
    // settings :{type: [Mixed], required: true}, //maybe u dont need this..?
    friendRequestSent: {type:[String], required: true},
    friendRequestReceived: {type:[String], required: true}

})

const User = mongoose.model('User', UserSchema)
module.exports = User