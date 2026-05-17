import express from "express";
import { sendJson } from "./utils/sendJson.js";
import { sessionMiddleware } from "./middlewares/sessionMiddleware.js";
import { login } from "./controllers/authorization.js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const port = 3000;


app.use(express.json());

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.use(express.static(path.join(dirname,"../public")));

app.use(express.static(path.join(process.cwd(), "public")));    //aqui ajustei o path pra conseguir acessar corretamente os static files.

app.use("auth", sessionMiddleware)

app.post("/login", login);





app.listen(3000, ()=>{

    console.log(`Server running on port ${port}`);

});