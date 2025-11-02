import { Request, Response, NextFunction, RequestHandler } from 'express';

/**
 * catchAsync - Higher-order function to wrap async route handlers
 * @param fn - Async route handler function
 * @returns Wrapped function that automatically catches errors
 */

const catchAsync = (fn: RequestHandler) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

export default catchAsync;
