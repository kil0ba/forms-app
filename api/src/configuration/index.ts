import dotenv from "dotenv";

dotenv.config(); // Достаем env


export const PORT = process.env.PORT;
export const MONGO_URL = process.env.MONGO_URL;
export const MAILER_API_KEY = process.env.emailServiceApi;
