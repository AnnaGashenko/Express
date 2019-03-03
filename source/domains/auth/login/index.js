// Core
import dg from 'debug';
import jwt from 'jsonwebtoken';

const debug = dg('router:auth:login');

export const post = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    const data = req.body;

    const email = Buffer.from(data.email, 'base64').toString('utf-8');
    const password = Buffer.from(data.password, 'base64').toString('utf-8');

    try {
        const token = jwt.sign({ email: email }, 'pa$$w0rd');
        res.set('X-Token', token);
        res.status(200).json('OK');
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
