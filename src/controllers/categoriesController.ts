import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '../enums/http.enum';
import * as categoriesService from '../services/categoriesService';

async function getAllCategories(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const categories = await categoriesService.fetchAllCategories();
    return res.status(HttpStatusCode.OK).send(categories);
  } catch (error) {
    next(error);
  }
}

export { getAllCategories };
