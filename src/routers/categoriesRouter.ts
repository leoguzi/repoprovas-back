import { Router } from 'express';
import * as categoriesController from '../controllers/categoriesController';

const categoryRouter = Router();

categoryRouter.get('/', categoriesController.getAllCategories);

export default categoryRouter;
