// Dotenv
import dotenv from 'dotenv';
dotenv.config({ path: __dirname + " /.env" });

// port api
export const PORT = process.env.PORT || 5000;