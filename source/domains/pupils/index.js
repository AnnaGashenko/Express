// Core
import dg from 'debug';

// Instruments
import { Pupils } from '../../controllers';

const debug = dg('router:pupils');

export const getPupils = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const pupils = new Pupils(req.body);
        const data = await pupils.findPupils();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const createPupils = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const pupils = new Pupils(req.body);
        const data = await pupils.createPupils();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
