import { Response } from 'express';

interface IResMeta {
    total?: number;
    page?: number;
    limit?: number;
}

interface IApiResponse<T> {
    statusCode?: number;
    success?: boolean;
    message?: string;
    data?: T;
    meta?: IResMeta;
}

/**
 * apiResponse - Standardized API response helper
 *
 * @param res Express Response object
 * @param response Object containing statusCode, success, message, data, meta
 */
const apiResponse = <T>(
    res: Response,
    { statusCode = 200, success = true, message = '', data, meta }: IApiResponse<T>
): void => {
    res.status(statusCode).json({
        success,
        message,
        data,
        meta,
    });
};

export default apiResponse;
