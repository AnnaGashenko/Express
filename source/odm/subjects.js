import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash: {
        type: String
    },
    title: {
        type: String
    },
    image: {
        type: Buffer
    },
    seasons: [
        {
            season: {
                type: mongoose.Schema.Types.ObjectId
            },
        }
    ],
    description: {
        type: String
    },
    created: {
        type: Date
    }
});

schema.index({title: 'text', description: 'text'});

// Collection
export const subjects = mongoose.model('subjects', schema);
