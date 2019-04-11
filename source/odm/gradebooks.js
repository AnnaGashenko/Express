import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema(
    {
        hash: {
            type:     String,
            required: true,
            unique:   true,
        },
        image: String,
        year:  {
            type:     Number,
            required: true,
            index:    true,
            min: [2019, 'year can not be lower than 2019'],
            max: [2099, 'year can not be grater than 2099'],
        },
        class: {
            type:     String,
            required: true,
            index:    true,
        },
        records: [
            {
                personHash:  mongoose.SchemaTypes.ObjectId,
                teacherHash: mongoose.SchemaTypes.ObjectId,
                subjectHash: mongoose.SchemaTypes.ObjectId,
                seasonHash:  mongoose.SchemaTypes.ObjectId,
                lessonHash:  mongoose.SchemaTypes.ObjectId,
                mark:        Number,
            },
        ],
        description: String,
    },
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'modified',
        },
    },
);

schema.path('image').validate(function(value) {
    const isValid = /^([/|.|\w|\s])*\.(?:jpg|gif|png)$/.test(value);

    return isValid;
}, 'path of image do not valid');

// Collection
export const gradebooks = mongoose.model('gradebooks', schema);
