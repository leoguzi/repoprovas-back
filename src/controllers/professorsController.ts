import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '../enums/http.enum';
import * as professorsService from '../services/professorsService';

async function getAllProfessors(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const professors = await professorsService.fetchAllProfessors();
    return res.status(HttpStatusCode.OK).send(professors);
  } catch (error) {
    next(error);
  }
}

export { getAllProfessors };
