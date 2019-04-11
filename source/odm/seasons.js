import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema(
    {
        hash: {
            type:     String,
            required: true,
            unique:   true,
        },
        order: {
            type:     Number,
            required: true,
            min: [0, 'balance can not be lower than zero'],
        },
        title: {
            type:     String,
            required: true,
            unique:   true,
            maxlength: 30,
        },
        image:   String,
        subject: {
            type:     mongoose.SchemaTypes.ObjectId,
            required: true,
        },
        lessons: [
            {
                lesson: mongoose.SchemaTypes.ObjectId,
            },
        ],
        description: {
            type:     String,
            maxlength: 250,
        },
    },
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'modified',
        },
    },
);

schema.index({ title: 'text', description: 'text' });

schema.path('image').validate(function(value) {
    const isValid = /^([/|.|\w|\s])*\.(?:jpg|gif|png)$/.test(value);

    return isValid;
}, 'path of image do not valid');

// Collection
export const seasons = mongoose.model('seasons', schema);
