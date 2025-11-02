import { Request, Response, NextFunction } from 'express';
import apiResponse from '../lib/utils/apiResponse';

const notFoundHandler = (req: Request, res: Response, _next: NextFunction) => {
    apiResponse(res, {
        statusCode: 404,
        success: false,
        message: 'Route not found!',
        data: {
            path: req.originalUrl,
        },
    });
};

export default notFoundHandler;
