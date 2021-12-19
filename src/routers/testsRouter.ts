import { Router } from 'express';
import * as testsController from '../controllers/testsController';

const testsRouter = Router();

testsRouter.post('/', testsController.createTest);
testsRouter.get(
  '/professors/:idProfessor',
  testsController.getTestsByProfessor
);

export default testsRouter;
