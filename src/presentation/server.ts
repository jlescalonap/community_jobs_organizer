import * as express from "express"
import { Request, Response } from "express"

import { Routes } from "./routes";
import * as dotenv from 'dotenv';

dotenv.config();

export class Server {

    public readonly app = express();

    constructor() { }

    async start() {

        const routes = new Routes();

        this.app.use(express.text());
        this.app.use(express.json());

        this.app.get("/", (req: Request, res: Response) => {
            res.send("Hello World!")
        })
        this.app.use(routes.getRouter());

        this.app.listen(process.env.PORT);

        console.log(` Corriendo en el puerto  http://localhost:${process.env.PORT}`);
    }
}