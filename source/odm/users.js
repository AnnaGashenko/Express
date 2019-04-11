import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema(
    {
        email: {
            type:     String,
            required: true,
            unique:   true
        },
        password: {
            type:     String,
            required: true,
        },
    },
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'modified',
        },
    },
);

schema.path('emails').validate(function(value) {
    const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}$/;

    const isValid = value.every(({ email }) => regex.test(email));

    return isValid;
}, 'Do not correct email');

// Collection
export const users = mongoose.model('users', schema);
