import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash: {
        type: String
    },
    name: {
        first: {
            type: String
        },
        last: {
            type: String
        }
    },
    image: {
        type: Buffer
    },
    dateOfBirth: {
        type: Date
    },
    emails: [
        {
            email: {
                type: String,
                unique: true
            },
            primary: {
                type: Boolean
            }
        }
    ],
    phones: [
        {
            phone: {
                type: String
            },
            primary: {
                type: Boolean
            }
        }
    ],
    sex: {
        type: String,
        enum: ["male", "female"]
    },
    social: {
        facebook: {
            type: String
        },
        linkedIn: {
            type: String
        },
        skype: {
            type: String
        },
        telegram: {
            type: String
        }
    },
    subjects: [
        {
            subject: {
                type: mongoose.Schema.Types.ObjectId
            }
        }
    ],
    description: {
        type: String
    },
    started: {
        type: Date
    },
    created: {
        type: Date
    }
});

schema.index({'name.first': 1, 'name.last': 1});

// Collection
export const teachers = mongoose.model('teachers', schema);
