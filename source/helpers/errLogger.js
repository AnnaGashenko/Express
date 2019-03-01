import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, prettyPrint } = format;

export const errLogger = createLogger({
    level:  'debug',
    format: combine(
        label({ label: 'server' }),
        timestamp(),
        prettyPrint(),
    ),
    transports: [
        new transports.File({
            filename: 'logs/error.log',
            level:    'error',
        }),
    ],
});
