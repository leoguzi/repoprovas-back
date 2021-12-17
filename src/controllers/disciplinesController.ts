import { Request, Response, NextFunction } from 'express';
import Discipline from '../entities/Discipline';
import { getRepository } from 'typeorm';

async function getAllDisciplines(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const disciplines = await getRepository(Discipline).find({
      relations: ['professors'],
    });
    return res.status(200).send(disciplines);
  } catch (error) {
    next(error);
  }
}

export { getAllDisciplines };
