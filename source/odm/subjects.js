import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema(
    {
        hash: {
            type:     String,
            required: true,
            unique:   true,
        },
        title: {
            type:     String,
            required: true,
            unique:   true,
            maxlength: 30,
        },
        image:   String,
        seasons: [
            {
                season: mongoose.SchemaTypes.ObjectId,
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
export const subjects = mongoose.model('subjects', schema);
