import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash: {
        type: String
    },
    order: {
        type: Number,
        index: true
    }, // Number
    title: {
        type: String,
        index: 'text'
    },
    image: {
        type: Buffer
    },
    room: {
        type: Number,
        index: true
    },
    floor: {
        type: Number
    },
    gradebooks: [
        {
            gradebook: {
                type: mongoose.Schema.Types.ObjectId
            }
        }
    ],
    description: {
        type: String,
        index: 'text'
    },
    created: {
        type: Date
    }
});

// Collection
export const classes = mongoose.model('classes', schema);
