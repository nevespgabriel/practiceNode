import e from "express";
import db from "./config/db.js";
import dotenv from "dotenv";
import user_router from "./routes/user_route.js";

dotenv.config();
db();

const app = e();
app.use(e.json());

app.use("/", user_router);

app.listen(process.env.API_PORT, () => console.log(`Servidor rodando na porta ${process.env.API_PORT}`));