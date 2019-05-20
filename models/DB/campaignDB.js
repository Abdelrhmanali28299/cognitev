const mongoose = require('mongoose')
const Schema = mongoose.Schema

const campaignSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    goal: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    duration: {
        start: {
            type: Date,
            default: Date.now
        },
        end: {
            type: Date,
            required: true
        }
    }
})

module.exports = mongoose.model("campaigns", campaignSchema)