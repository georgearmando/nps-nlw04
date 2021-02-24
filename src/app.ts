import "reflect-metadata";
import express from "express";

import cerateConnection from "./database";
import userRouter from "./routes";

cerateConnection();
const app = express();

app.use(express.json()); // Faz com que o express leia os dados das requisições (JSON)
app.use(userRouter)

export default app;