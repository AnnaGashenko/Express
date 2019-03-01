export class ValidationError extends Error {
    constructor(message, statusCode) {
        super();
        Error.captureStackTrace(this, ValidationError);
        this.name = 'ValidationError';
        this.message = message;
        this.statusCode = statusCode;
    }
}
