import { Request, Response } from 'express';
import { WelcomeImplement } from './welcome.implement';
//importar conexion
/**
 *En el controlador se va a validar la data y los errores 
 *
 * @class WelcomeController
 */
export class WelcomeController {

  public welcomeImplement = new WelcomeImplement()

  /**
   *LLAMA EL IMPLEMENTO  Welcomeimplement para usar sus metodos
   *
   * @param {Request} req
   * @param {Response} res
   * @memberof WelcomeController
   */
  async great(req: Request, res: Response) {

    try {

      let body = req.body;
      const conn = 'Esto seria la conexión db';
      let data = this.welcomeImplement.greet(conn, 'Hola bienvenido a mi Back')

      //enviamos respuesta
      res.send(data);
      
    } catch (error) {
      //controlamos errores
      res.send(error);
    }
    
  }
}