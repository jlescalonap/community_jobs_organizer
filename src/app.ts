// app.ts

// Modules
import { Request, Response } from 'express';
import express from 'express';
import morgan from 'morgan';

// Routes
import authRoutes from '../src/routes/auth.routes';
import { jobsEvents } from './events/new-job.event';

// start server
export async function start() {
  // Test de eventos
  jobsEvents.onNotifyOnDiscord({
    content: 'Prueba de sonido!',
    channel: 'jobs',
  });
  // express
  const app = express();
  app.use(express.text());
  app.use(express.json());

  // morgan
  app.use(morgan('dev'));

  // Api rest
  // welcome
  app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
  });

  // auth routes
  app.use(authRoutes);

  // 404
  app.use((req, res) => {
    res.status(404).send('not found');
  });

  return app;
}
