import { Router } from 'express';
import * as disciplinesController from '../controllers/disciplinesController';

const disciplinesRouter = Router();

disciplinesRouter.get('/', disciplinesController.getAllDisciplines);

export default disciplinesRouter;
