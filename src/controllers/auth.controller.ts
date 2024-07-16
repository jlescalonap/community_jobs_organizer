// auth.controller.ts

// Modules
import { Request, Response } from "express";
import bcrypt from "bcrypt";

// Models
import User from "../models/user.model"

// Libs
import { createToken } from "../libs/jwt.lib";

// Utils
import { Critical } from "../utils/logger.utils";


export const register = async (req: Request, res: Response) => {

  const { username, email, password } = req.body;

  try {

    const userFound = await User.findOne({
      $or: [
        { username: username },
        { email: email }
      ]
    });

    if (userFound) {
      if (userFound.username === username) {
        return res.status(400).json({ message: "El usuario ya existe" });
      } else if (userFound.email === email) {
        return res.status(400).json({ message: "El correo ya existe" });
      }
    }

    const hash = await bcrypt.hash(password, 8);

    const newUser = new User({
      username,
      email,
      password: hash
    });

    await newUser.save();

    return res.status(201).json({ message: "Usuario registrado exitosamente" });

  } catch (error) {

    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }

    Critical(
      '[AuthController] Ha ocurrido un error al ejecutar el controlador de autenticacion'
    );
  }
}

export const login = async (req: Request, res: Response) => {

  const { usernameOrEmail, password } = req.body;

  try {

    const user = await User.findOne(
      usernameOrEmail.includes("@")
        ? { email: usernameOrEmail }
        : { username: usernameOrEmail }
    );

    if (!user || !user.username || !user.email || !user.password) {
      return res.status(400).json({ message: "Tu usuario o correo no existe" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Tu usuario, correo o contraseña son inválidos" });
    }

    const token = await createToken({ _id: user._id });

    res.cookie("token", token);

    res.json({
      id: user._id,
      username: user.username,
      email: user.email
    });

  } catch (error) {

    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }

    Critical(
      '[AuthController] Ha ocurrido un error al ejecutar el controlador de autenticacion'
    );
  }
}

export const logout = async (req: Request, res: Response) => {
  try {

    res.cookie("token", "", {
      expires: new Date(0)
    });

    return res.status(201).json({ message: "Se ha cerrado sesión" });

  } catch (error) {

    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }

    Critical(
      '[AuthController] Ha ocurrido un error al ejecutar el controlador de autenticacion'
    );
  }
}