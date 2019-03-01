const winston = require('winston');

export const loggerDevelop = () => (req, res, next) => {
    const logger = winston.createLogger({
        level:      'debug',
        format:     winston.format.simple(),
        transports: [
            new winston.transports.File({
                filename: 'logs/debug.log',
                level:    'debug',
            }),
        ],
    });

    if (process.env.NODE_ENV !== 'production') {
        logger.add(
            new winston.transports.Console({
                format: winston.format.simple(),
            }),
        );
    }

    logger.debug(`Method: ${req.method}, \n Time: ${Date.now()}, \n Payload: ${req.body}`);
};
