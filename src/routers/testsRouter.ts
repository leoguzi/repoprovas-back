import { Router } from 'express';
import * as testsController from '../controllers/testsController';

const testsRouter = Router();

testsRouter.post('/', testsController.createTest);
testsRouter.get('/professor/:idProfessor', testsController.getTestsByProfessor);
testsRouter.get('/period/:idPeriod', testsController.getTestsByPeriod);

export default testsRouter;
