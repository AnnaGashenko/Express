import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema(
    {
        hash: {
            type: String
        },
        order: {
            type: Number
        },
        title: {
            type: String,
            index: true
        },
        image: {
            type: Buffer
        },
        subject: {
            type: mongoose.Schema.Types.ObjectId
        }, // ObjectId
        season: {
            type: mongoose.Schema.Types.ObjectId
        } // ObjectId
    },
    { timestamps: { createdAt: 'created', updatedAt: 'modified' } }
);

// Collection
export const lessons = mongoose.model('lessons', schema);
