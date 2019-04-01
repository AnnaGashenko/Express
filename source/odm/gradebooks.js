import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema(
    {
        hash: {
            type: String
        },
        image: {
            type: String
        },
        year: {
            type: Number,
            index: true
        },
        class: {
            type: Number,
            index: true
        },
        records: [
            {
                personHash: {
                    type: mongoose.Schema.Types.ObjectId
                }, // ObjectId
                teacherHash: {
                    type: mongoose.Schema.Types.ObjectId
                }, // ObjectId
                subjectHash: {
                    type: mongoose.Schema.Types.ObjectId
                }, // ObjectId
                seasonHash: {
                    type: mongoose.Schema.Types.ObjectId
                }, // ObjectId
                lessonHash: {
                    type: mongoose.Schema.Types.ObjectId
                }, // ObjectId
                mark: {
                    type: Number
                } // Number
            }
        ],
        description: {
            type: String
        }
    },
    { timestamps: { createdAt: 'created', updatedAt: 'modified' } }

);

// Collection
export const gradebooks = mongoose.model('gradebooks', schema);
