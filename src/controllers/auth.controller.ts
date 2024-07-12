// auth.controller.ts

// Modules
import { Request, Response } from "express"

// Models
import User from "../models/user.model"

export const login = async (req: Request, res: Response) => {

    const { username, password } = req.body;

    try {

        console.log("login");

    } catch (error) {
        console.log(error)
    }
}

export const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    try {

        const newUser = new User({
            username,
            email,
            password
        });

        const user = await newUser.save();
        res.json(user);

    } catch (error) {
        console.log(error)
    }
}