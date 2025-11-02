import { Request, Response, NextFunction } from 'express';
import ApiError from '../lib/utils/ApiError';

const globalErrorHandler = (err: Error, req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof ApiError) {
        res.status(err.statusCode).json({
            success: false,
            message: err.message,
            stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
        });
    } else {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
        });
    }
};

export default globalErrorHandler;
