// Core
import dg from 'debug';


// Instruments
import { ValidationError, sessionStore } from '../../helpers';

const debug = dg('router:auth');

export const post = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        if(!req.body.email) { throw new ValidationError('payload should have property email', 400) }
        const { email, password } = req.body;
        const emailDecoded = Buffer.from(email, 'base64').toString();
        const passwordDecoded = Buffer.from(password, 'base64').toString();
        let endDate = new Date();
        endDate.setSeconds(endDate.getSeconds() + req.session.cookie.originalMaxAge);

        req.session.user = {
            payload: { email: emailDecoded },
            agent: req.headers['user-agent'],
            start: new Date(),
            end: endDate,
            authType: 'cookie',
        };

        res.sendStatus(204);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};
