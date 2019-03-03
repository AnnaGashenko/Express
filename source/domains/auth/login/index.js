import express from 'express';
import session from 'express-session';
import dg from 'debug';

import { devLogger, errLogger, requireJsonContent } from './helpers';

const debug = dg('router:auth:login');
const app = express();

const sessionOptions = {
    key: 'user', // cookie name
    secret: 'pa$$w0rd', // change to your password
    resave: false, // disable session resave
    rolling: true, // reset max age on every use
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 15 * 60 * 1000
    }
};

app.use(express.json());
app.use(session(sessionOptions));

const data = req.body;
_validateUser(data);

const email = Buffer.from(data.email, 'base64').toString('utf-8');
const password = Buffer.from(data.password, 'base64').toString('utf-8');

export const post = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        req.session.user = { email: email };

        res.status(200).json('OK');
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const _validateUser = (user) => {
    if (user && typeof user !== 'object') {
        throw new Error('user should be an object');
    }

    if (!user.hasOwnProperty('email')) {
        throw new Error('user should have a email property')
    }

    if (!user.hasOwnProperty('password')) {
        throw new Error('user should have a password property');
    }

    if (typeof user.email !== 'string') {
        throw new Error('email should a string');
    }

    if (typeof user.password !== 'string') {
        throw new Error('password should a string');
    }
};