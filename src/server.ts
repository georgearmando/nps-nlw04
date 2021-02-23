import "reflect-metadata";
import express from "express";

import "./database";
import userRouter from "./routes";

const app = express();

app.use(express.json()); // Faz com que o express leia os dados das requisições (JSON)
app.use(userRouter)

app.listen(3333, () => console.log("Server is running!!!"))