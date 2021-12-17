import { Request, Response, NextFunction } from 'express';
import * as professorsService from '../services/professorsService';

async function getAllProfessors(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const professors = await professorsService.fetchAllProfessors();
    return res.status(200).send(professors);
  } catch (error) {
    next(error);
  }
}

export { getAllProfessors };
