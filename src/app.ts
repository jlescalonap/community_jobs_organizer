// app.ts

// Modules
import { Request, Response } from "express"
import express from "express";
import morgan from "morgan";

// Routes
import authRoutes from "../src/routes/auth.routes"


// start server
export async function start() {

    // express
    const app = express();
    app.use(express.text());
    app.use(express.json());

    // morgan
    app.use(morgan("dev"));

    // Api rest
    // welcome
    app.get("/", (req: Request, res: Response) => {
        res.send("Hello World!")
    })

    // auth routes
    app.use(authRoutes);

    // 404
    app.use((req, res, next) => {
        res.status(404).send("not found");
    });

    return app;
}