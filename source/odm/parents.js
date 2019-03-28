import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash: {
        type: String
    },
    name: {
        first: {
            type: String,
            index: true
        },
        last: {
            type: String,
            index: true
        }
    },
    image: {
        type: String
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
                type: String
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
    pupils: [
        {
            person: {
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
});

schema.index({'name.first': 1, 'name.last': 1});

// Collection
export const parents = mongoose.model('parents', schema);
