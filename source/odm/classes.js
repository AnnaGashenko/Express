import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema(
    {
        hash: {
            type: String
        },
        order: {
            type: Number,
            index: true
        }, // Number
        title: {
            type: String
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
            type: String
        },
        created: {
            type: Date
        }
    },
    { timestamps: { createdAt: 'created', updatedAt: 'modified' } }

);

schema.index({title: 'text', description: 'text'});

// Collection
export const classes = mongoose.model('classes', schema);
