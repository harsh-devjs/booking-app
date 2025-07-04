import mongoose from 'mongoose'

const RoomSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    maxPeople: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    roomNumbers: [{ number: Number, availableDates: { type: [Date] } }],
},
    { timestamps: true }
)

export default mongoose.model("Room", RoomSchema)