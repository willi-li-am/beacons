const mongoose = require('mongoose')
const { Schema } = mongoose

const EventSchema = new Schema(
    {
        date_expected: { type: String, required: true },
        author_id: { type: String, required: true },
        location: { required: false },
        title: {type: String, required: true},
        description: { type: String, required: true},
        invited: { type: [String], required: true, index: true },
        accepted: { type: [String], required: false},
        declined: { type: [String], required: false},
        status: {type: String, required: true}, //EVENT, ACTIVITY
    },
    {
        timestamps: true,
    }
)

const Event = mongoose.model('Event', EventSchema)

module.exports = Event
