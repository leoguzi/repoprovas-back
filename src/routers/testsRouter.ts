import { Router } from 'express';
import * as testsController from '../controllers/testsController';

const testsRouter = Router();

testsRouter.post('/', testsController.createTest);

export default testsRouter;
