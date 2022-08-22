import mongoose from 'mongoose'

var Schema = mongoose.Schema

var BoulderSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    grade: {
        type: Number,
        required: true,
        min: 0, max: 17
    },

    rpe: {
        type: Number,
        min: 1, max: 10
    },

    attempts: {
        type: Number,
        min: 0
    },

    crag: {
        type: String
    }
})

export default mongoose.model('Boulder', BoulderSchema)