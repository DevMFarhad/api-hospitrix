import app from './app';
import envConfig from './config/envConfig';

app.listen(envConfig.port, () => {
    console.log(`✅ Server running perfectly.`);
});
