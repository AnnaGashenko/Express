// Core
import dg from 'debug';

// Instruments
import { Parents } from '../../../controllers';

const debug = dg('router:parents:parent');

export const get = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const parents = new Parents();
        const data = await parents.find();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const post = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const parents = new Parents(req.body);
        const data = await parents.create();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const put = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const params = {
            id : req.params.id,
            payload : req.body
        };
        const parents = new Parents(params);
        const data = parents.update();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const remove = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const { id } = req.params;
        const parents = new Parents(id);
        parents.delete();
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
