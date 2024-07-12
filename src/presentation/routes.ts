import { Router } from 'express';
import { WelcomeController } from './welcome/welcome.controller';

export class Routes {
  private router = Router();
  private welcomeController = new WelcomeController();

  constructor() {
    // RUTAS 
    this.router.get('/api/welcome', this.welcomeController.great.bind(this.welcomeController));
    //para asegurar que el contexto del método greet en el controlador sea el correcto.
  }

  public getRouter() {
    return this.router;
  }
}