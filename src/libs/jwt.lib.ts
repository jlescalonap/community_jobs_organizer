// token.ts

// Modules
import jwt from "jsonwebtoken";

// Configs
import { tokenSecret } from "../configs/global.config";

// Types
import { Payload, } from "../types/jwt.type";


export const createToken = async (payload: Payload) => {

  return new Promise<string>((resolve, reject) => {

    const jwtOptions: jwt.SignOptions = {
      expiresIn: "1d",
    };

    jwt.sign(
      payload,
      tokenSecret,
      jwtOptions,
      (error, token) => {
        if (error) {
          reject(error);
        } else {
          resolve(token as string);
        }
      }
    );

  });
};