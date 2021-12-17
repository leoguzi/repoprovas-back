import { Request, Response, NextFunction } from 'express';
import * as categoriesService from '../services/categoriesService';

async function getAllCategories(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const categories = await categoriesService.fetchAllCategories();
    return res.status(200).send(categories);
  } catch (error) {
    next(error);
  }
}

export { getAllCategories };
