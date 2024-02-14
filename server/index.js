import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config()

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, (err, res) => {
    console.log(`Server listening on ${PORT}`);
});