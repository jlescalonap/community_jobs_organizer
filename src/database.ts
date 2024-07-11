// database.ts

// Modules
import mongoose from "mongoose";


export const connectMongoDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/db");
        console.log('Base de datos conectada exitosamente');
    } catch (error) {
        console.log(error)
    }
}
