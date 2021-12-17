import { Request, Response, NextFunction } from 'express';
import * as disciplinesService from '../services/disciplinesService';

async function getAllDisciplines(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const disciplines = await disciplinesService.fetchAllDisciplines();
    return res.status(200).send(disciplines);
  } catch (error) {
    next(error);
  }
}

export { getAllDisciplines };
