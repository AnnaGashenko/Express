import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema(
    {
        hash: {
            type:     String,
            required: true,
            unique:   true,
        },
        name: {
            first: {
                type:     String,
                required: true,
                minlength: 2,
                maxlength: 15,
            },
            last: {
                type:     String,
                required: true,
                minlength: 2,
                maxlength: 15,
            },
        },
        image:       String,
        dateOfBirth: {
            type: Date,
            min: [
                () => Date.now() - 157788000000,
                'date of birth can not be lower than 5 years ago'
            ],
        },
        emails:      [
            {
                email: {
                    type:     String,
                    required: true,
                    unique:   true,
                },
                primary: Boolean,
            },
        ],
        phones: [
            {
                phone:   String,
                primary: Boolean,
            },
        ],
        sex:    {
            type:     String,
            enum: {
                values: ['m', 'f'],
                message: 'hm very interesting gender, but it is not allowed',
            },
        },
        social: {
            facebook: String,
            linkedIn: String,
            skype:    String,
            telegram: String,
        },
        class:   mongoose.SchemaTypes.ObjectId,
        parents: [
            {
                parent: mongoose.SchemaTypes.ObjectId,
            },
        ],
        description: String,
        started:     Date,
    },
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'modified',
        },
    },
);

schema.index({ 'name.first': 1, 'name.last': 1 });

schema.path('image').validate(function(value) {
    const isValid = /^([/|.|\w|\s])*\.(?:jpg|gif|png)$/.test(value);

    return isValid;
}, 'path of image do not valid');

schema.path('emails').validate(function(value) {
    const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}$/;

    const isValid = value.every(({ email }) => regex.test(email));

    return isValid;
}, 'Do not correct email');

// Collection
export const persons = mongoose.model('persons', schema);
