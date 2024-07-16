// global.ts

// Dotenv
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

// Port API
export const PORT = process.env.PORT;

// MongoDB host
export const DB_HOST = process.env.DB_HOST as string;

// Token Secret
export const tokenSecret = "asdasdds123";