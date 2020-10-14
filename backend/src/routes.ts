import { Router } from 'express';

import OrphanagesController from './controllers/OrphanagesController';


const routes = Router();

routes.get('/orphanages', OrphanagesController.index);

routes.get('/orphanages/:id', OrphanagesController.showById);

routes.post('/orphanages', OrphanagesController.create);

export default routes;