import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const envConfig = {
    port: Number(process.env.PORT) || 5000,
    node_env: process.env.NODE_ENV || 'development',
    client_base_url: process.env.CLIENT_BASE_URL || 'http://localhost:3000',
    server_base_url: process.env.SERVER_BASE_URL || 'http://localhost:5000',
};

export default envConfig;
