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
            type: String
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
            type: String
        }
    },
    { timestamps: { createdAt: 'created', updatedAt: 'modified' } }
);

schema.index({title: 'text', description: 'text'});

// Collection
export const seasons = mongoose.model('seasons', schema);
