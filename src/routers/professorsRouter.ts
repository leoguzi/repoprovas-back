import { Router } from 'express';
import * as professorsController from '../controllers/professorsController';

const professorsRouter = Router();

professorsRouter.get('/', professorsController.getAllProfessors);

export default professorsRouter;
