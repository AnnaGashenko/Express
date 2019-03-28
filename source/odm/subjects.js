import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash: {
        type: String
    },
    title: {
        type: String,
        index: 'text'
    },
    image: {
        type: Buffer
    },
    seasons: [
        {
            season: {
                type: mongoose.Schema.Types.ObjectId
            }, // ObjectId
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
export const subjects = mongoose.model('subjects', schema);
