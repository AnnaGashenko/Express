// Core
import jwt from 'jsonwebtoken';

const passToken = 'pa$$w0rd';

export const authenticate = (req, res, next) => {

    const { authorization } = req.headers;

    try {
        const data = jwt.verify(authorization, passToken);
        next();
    } catch ({ message }) {
        res.status(401).json({ message: 'authentication credentials are not valid' });
    }

};
