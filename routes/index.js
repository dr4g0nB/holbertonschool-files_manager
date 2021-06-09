import express from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';

// Endpoints
const routeControllers = (app) => {
  const router = express.Router();

  app.use('/', router);

  router.get('/status', (req, res) => {
    AppController.getStatus(req, res);
  });

  router.get('/stats', (req, res) => {
    AppController.getStats(req, res);
  });

  router.post('/users', (req, res) => {
    UsersController.postNew(req, res);
  });

  router.get('/connect', (req, res) => {
    AppController.getConnect(req, res);
  });

  router.get('/disconnet', (req, res) => {
    AppController.getDisconnect(req, res);
  });

  router.get('/users/me', (req, res) => {
    UsersController.getMe(req, res);
  });

  //File controller
  router.get('/files/:id', (req, res) => {
    FilesController.getShow(req, res);
  });

  router.get('/files', (req, res) => {
    FilesController.getIndex(req, res);
  });
};

export default routeControllers;
