import { Router } from 'express';
import * as periodsController from '../controllers/periodsController';

const periodsRouter = Router();

periodsRouter.get('/', periodsController.getAllPeriods);

export default periodsRouter;
