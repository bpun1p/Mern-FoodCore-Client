const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userReceipeSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        default: undefined,
        required: true
    },
    instructions: {
        type: [String],
        default: undefined,
        required: true
    },
    author: {
        type:[String],
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('receipe', userReceipeSchema);

