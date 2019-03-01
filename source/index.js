// Core
import dg from 'debug';

// Instruments
import { app } from './server';
import { getPort, errLogger } from './helpers';

const port = getPort();
const debugSrv = dg('server:main');

const server = app.listen(port, () => {
    debugSrv(`Server API is up on port ${port}`);
});

process.on('unhandledRejection', async (error, promise) => {
    try {
        promise.handled = true;

        await promise;
    } catch (error) {
        if (error.name === 'ValidationError') {
            errLogger.log('error', error.message);
        } else  {
            server.close();
        }

    }
});
