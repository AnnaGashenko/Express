import mongoose from 'mongoose';

import { base } from './base';

// Document shape

export const parents = base.discriminator(
    'parents',
    new mongoose.Schema(
        {
            emails: [
                {
                    email: {
                        type: String,
                        required: true,
                        unique: true,
                    },
                    primary: Boolean,
                },
            ],
            phones: [
                {
                    phone: String,
                    primary: Boolean,
                },
            ],
            social: {
                facebook: String,
                linkedIn: String,
                skype: String,
                telegram: String,
            },
            pupils: [
                {
                    pupil: mongoose.SchemaTypes.ObjectId,
                },
            ]
        }
    ),
);

// export const parents = mongoose.model('parents', schema);