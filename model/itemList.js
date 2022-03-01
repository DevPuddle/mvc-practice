const mongoose = require("mongoose")

const itemListSchema = new mongoose.Schema({
    textInput: {
        type: String,
        required: true,
    },
    numInput: {
        type: Number,
        required: true,
    }
})