import { Request, Response, NextFunction } from 'express';
import Category from '../entities/Category';
import { getRepository } from 'typeorm';

async function getAllCategories(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const categories = await getRepository(Category).find();
    return res.status(200).send(categories);
  } catch (error) {
    next(error);
  }
}

export { getAllCategories };
