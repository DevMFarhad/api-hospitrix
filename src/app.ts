import express, { Application } from 'express';

const app: Application = express();

app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is running.🚀',
        data: {
            name: 'Hospitrix',
            version: '1.0.0',
            description: 'Hospital   Management System',
        },
    });
});

export default app;
