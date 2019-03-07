// Core
import dg from 'debug';

const debug = dg('router:auth:list');

import { sessionStore } from '../../../helpers';

export const post = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);


    try {
        const store = new sessionStore();
        const session = store.getAll();

        res.status(200).json(session);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};
