import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();
const { Client } = pkg;
const client = new Client({
  host: "localhost",
  port: 5000,
  user: "hrushikeshreddy",
  password: process.env.POSTGRE_PASSWORD,
  database: "todoapp",
});
export default client;
