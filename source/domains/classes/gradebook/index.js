// Core
import dg from 'debug';

// Instruments
import { Classes } from '../../../controllers';

const debug = dg('router:classes:gradebook');

export const get = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const classes = new Classes();
        const data = classes.find();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const post = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const classes = new Classes();
        const data = classes.create(req.body);

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
        const classes = new Classes(params);
        const data = classes.update();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const remove = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const classes = new Classes(req.params.id);
        classes.delete();
        
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
