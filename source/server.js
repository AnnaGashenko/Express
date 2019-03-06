// Core
import express from 'express';

// Routes
import * as domains from './domains';

// Instruments
import { devLogger, errLogger, requireJsonContent } from './helpers';

const app = express();

app.use(
    express.json({
        limit: '10kb',
    }),
);

app.use(requireJsonContent);

if (process.env.NODE_ENV === 'development') {
    app.use((req, res, next) => {
        const body
            = req.method === 'GET' ? 'Body not supported for GET' : JSON.stringify(req.body, null, 2);

        devLogger.debug(`${req.method}\n${body}`);
        next();
    });
}

app.use('/api/teachers', domains.teachers);
app.use('/api/pupils', domains.pupils);
app.use('/api/parents', domains.parents);
app.use('/api/classes', domains.classes);
app.use('/api/subjects', domains.subjects);

if (process.env.NODE_ENV !== 'test') {
    app.use((err, req, res, next) => {
        const statusCode = err.statusCode ? err.statusCode : 500;
        res.status(statusCode).json({ message: err.message });
        errLogger.log('error', err.message);
    });
}

export { app };
