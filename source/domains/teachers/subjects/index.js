// Core
import dg from 'debug';

// Instruments
import { Subjects } from '../../../controllers';

const debug = dg('router:teachers:subjects');

export const get = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const subjects = new Subjects();
        const data = await subjects.find();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const post = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const subjects = new Subjects(req.body);
        const data = await subjects.create();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
