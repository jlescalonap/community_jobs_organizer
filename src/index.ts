import * as express from "express"
import { Request, Response } from "express"
 
import { Routes } from "./api/routes";
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();
const rutes = new Routes();

app.use(express.text());
app.use(express.json());
 
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!")
})
app.use(rutes.getRouter());



app.listen(process.env.PORT);

console.log(` Corriendo en el puerto  http://localhost:${process.env.PORT}`);
