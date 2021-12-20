import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '../enums/http.enum';
import * as periodsService from '../services/periodsService';

async function getAllPeriods(req: Request, res: Response, next: NextFunction) {
  try {
    const periods = await periodsService.fetchAllPeriods();
    return res.status(HttpStatusCode.OK).send(periods);
  } catch (error) {
    next(error);
  }
}

export { getAllPeriods };
