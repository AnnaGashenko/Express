// Core
import dg from 'debug';

const debug = dg('router:auth:list');

import { Storage } from '../../../helpers';

export const post = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);


    try {
        const session = req.sessionStore.getAll();
        console.log(session);

        res.status(200).json( { session } );
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};
