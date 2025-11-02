/**
 * ApiError - Custom error class for API errors
 *
 * @param statusCode - HTTP status code to send in the response
 * @param message - Human-readable error message
 * @param isOperational - Flag for operational vs system error (default: true)
 */
class ApiError extends Error {
    statusCode: number;
    isOperational: boolean;
    constructor(statusCode: number, message: string, isOperational = true) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace(this);
    }
}

export default ApiError;
