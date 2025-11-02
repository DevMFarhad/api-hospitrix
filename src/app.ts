import express, { Application } from 'express';
import notFoundHandler from './middlewares/notFoundHandler';
import globalErrorHandler from './middlewares/globalErrorHandler';
import apiResponse from './lib/utils/apiResponse';
import catchAsync from './lib/utils/catchAsync';
import cors from 'cors';
import envConfig from './config/envConfig';
import helmet from 'helmet';
import config from './config';

const app: Application = express();

/* ------  Middleware Setup ----- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: process.env.NODE_ENV === 'production' ? envConfig.client_base_url : '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        credentials: true,
    })
);
app.use(helmet());

// Health check route
app.get(
    '/health',
    catchAsync(async (req, res) => {
        apiResponse(res, {
            message: 'System is running perfectly.🚀',
            data: {
                hospitalName: config.hospital_name,
                application: config.app_name,
                description: config.description,
                version: config.version,
                author: {
                    name: 'Mohammad Farhad',
                    email: 'mfarhad.dev@gmail.com',
                    web: 'https://mfarhad.vercel.app',
                },
            },
        });
    })
);

/* // error check route
app.get(
    '/error',
    catchAsync(async () => {
        throw new Error('This is a test error');
    })
);
 */

app.use(notFoundHandler);
app.use(globalErrorHandler);

export default app;
