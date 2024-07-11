// index.ts

// Start
import { start } from './app';

// MongoDB
import { connectMongoDB } from './database';

// Configs
import { PORT } from './configs/global';


const main = async () => {
    try {
        // start server
        const httpServer = await start();

        httpServer.listen(PORT, () => {
            console.log(`Corriendo en el puerto http://localhost:${PORT}`);
        });

        // conntect db
        connectMongoDB();

    } catch (err) {
        console.error('Error al iniciar el servidor:', err);
    }
};

main();