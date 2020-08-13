import dotenv from "dotenv";

dotenv.config(); // Достаем env


export const PORT = process.env.PORT;
export const MONGO_URL = process.env.MONGO_URL;
export const MAILER_API_KEY = process.env.MAILER_API_KEY;
export const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY;
