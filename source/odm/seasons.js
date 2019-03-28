import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash: {
        type: String
    },
    order: {
        type: Number
    },
    title: {
        type: String,
        index: 'text'
    },
    image: {
        type: Buffer
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId
    },
    lessons: [
        {
            lesson: {
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
export const seasons = mongoose.model('seasons', schema);
