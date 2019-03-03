// Core
import dg from 'debug';
import jwt from 'jsonwebtoken';

const debug = dg('router:auth:login');

export const get = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const data = [];

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const post = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    const users = [
        {
            uid: '987654',
            email: 'amRvZUBlbWFpbC5jb20=',
            password: 'MTIzNDU2'
        },
        {
            uid: '987655',
            email: 'amFubmdhc2hAZ21haWwuY29t',
            password: 'SGVsbG8kRnJvbUomV1Q='
        }
    ];

    const data = req.body;
    const userData = users.filter(function (user) {
        const { email, password } = data;
        const {
            email: userEmail,
            password: userPassword
        } = user;

        if (email && userEmail && email === userEmail && password && userPassword && password === userPassword) {
            return true;
        }
        return false;
    });

    try {
        if(userData.length) {
            const passToken = 'pa$$w0rd';
            const token = jwt.sign({ uid: userData.uid }, passToken);
            res.set('X-Token', token);
            res.status(200).json(userData);
        } else {
            res.status(401).json({ message: 'user or email are not valid' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

};
