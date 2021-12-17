import { Request, Response, NextFunction } from 'express';
import Professor from '../entities/Professor';
import { getRepository } from 'typeorm';

async function getAllProfessors(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const professor: Professor[] = await getRepository(Professor).find();
    return res.status(200).send(professor);
  } catch (error) {
    next(error);
  }
}

export { getAllProfessors };
