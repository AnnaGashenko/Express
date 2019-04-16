import mongoose from 'mongoose';

import { base } from './base';

// Document shape

export const pupils = base.discriminator(
    'pupils',
    new mongoose.Schema(
        {
            class: {
                type: mongoose.SchemaTypes.ObjectId,
                ref:  'classes',
            },
            parents: [
                {
                    parent: {
                        type: mongoose.SchemaTypes.ObjectId,
                        ref:  'parents',
                    },
                },
            ],
            started: Date,
        }
    ),
);
