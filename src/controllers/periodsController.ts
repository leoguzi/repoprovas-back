import { Request, Response, NextFunction } from 'express';
import * as periodsService from '../services/periodsService';

async function getAllPeriods(req: Request, res: Response, next: NextFunction) {
  try {
    const periods = await periodsService.fetchAllPeriods();
    return res.status(200).send(periods);
  } catch (error) {
    next(error);
  }
}

export { getAllPeriods };
