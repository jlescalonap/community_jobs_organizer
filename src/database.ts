// database.ts

// Modules
import mongoose from 'mongoose';
import { Critical, Logger } from './utils/logger';
import dotenv from 'dotenv';
dotenv.config();

export const connectMongoDB = async () => {
  /* try {
        await mongoose.connect("mongodb://localhost:27017/db");
        console.log('Base de datos conectada exitosamente');
    } catch (error) {
        console.log(error)
    } */

  mongoose.Promise = global.Promise;
  mongoose.set('strictQuery', true);
  mongoose
    .connect(process.env.DB_HOST as string)
    .then(() => {
      Logger.debug('MongoDB Connected');
    })
    .catch((e) => {
      console.error(e);
      Critical(
        '[MongoDB] Falla en la conexión con la Base de datos. Esto causará fallas en todo el sistema.'
      );
    });
};
