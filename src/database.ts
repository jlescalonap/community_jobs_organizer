// database.ts

// Modules
import mongoose from 'mongoose';

// Utils
import { Critical, Logger } from './utils/logger.utils';

// Configs
import { DB_HOST } from './configs/global.config';


export const connectMongoDB = async () => {
  try {

    // validacion de variable de entorno
    if (!DB_HOST) {
      Critical(
        '[MongoDB] DB_HOST no está definido en las variables de entorno'
      );
    }

    mongoose.Promise = global.Promise;
    mongoose.set('strictQuery', true);

    // mongoose
    // .connect(process.env.DB_HOST as string)
    // .then(() => {
    //   Logger.debug('MongoDB Connected');
    // })
    // .catch((e) => {
    //   console.error(e);
    //   Critical(
    //     '[MongoDB] Falla en la conexión con la Base de datos. Esto causará fallas en todo el sistema.'
    //   );
    // });
    
    await mongoose.connect(DB_HOST);

    Logger.debug('MongoDB Conectado');

  } catch (error) {

    console.error(error);

    Critical(
      '[MongoDB] Falla en la conexión con la Base de datos. Esto causará fallas en todo el sistema.'
    );

    // logica de reintento
    setTimeout(connectMongoDB, 10000);
  }
};