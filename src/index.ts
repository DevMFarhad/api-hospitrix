/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { Server } from 'http';
import app from './app';
import envConfig from './config/envConfig';
import prisma from './prisma';

const port = envConfig.port;

let server: Server;

(async () => {
    try {
        await prisma.$connect();
        console.log('🚀 Database connected successfully.');

        server = app.listen(port, () => {
            console.log(`✅ Server running perfectly on port ${port}`);
        });
    } catch (error) {
        console.error('❌ Database connection failed:', error);
        process.exit(1);
    }
})();

process.on('uncaughtException', (err) => {
    console.error('💥 Uncaught Exception:', err);
    process.exit(1);
});

process.on('unhandledRejection', (reason: any) => {
    console.error('❌ Unhandled Rejection:', reason);
    if (server) {
        server.close(async () => {
            await prisma.$disconnect();
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
});

// 🧹 Handle Ctrl + C and graceful shutdown
process.on('SIGINT', async () => {
    console.log('🧩 SIGINT received. Closing server...');
    if (server) {
        server.close(async () => {
            await prisma.$disconnect();
            console.log('🛑 Server and database disconnected.');
            process.exit(0);
        });
    }
});
