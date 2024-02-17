const mongoose = require('mongoose')
const {Schema} = mongoose

const GroupSchema = new Schema (
    {
        users: {type: [String], required: true},
        name: {type: String, required: true},
        invite: {type: String, unique: true, required: true}
    }
)

const Group = mongoose.model('Group', GroupSchema)

module.exports = Group