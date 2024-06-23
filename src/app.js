import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

app.use(cookieParser());
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: process.env.LIMIT }));
app.use(express.urlencoded({ extended: true, limit: process.env.LIMIT }));
app.use(express.static("public"));

export { app };
