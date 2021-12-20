import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode, HttpStatusText } from '../enums/http.enum';
import * as disciplinesService from '../services/disciplinesService';

async function getAllDisciplines(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const disciplines = await disciplinesService.fetchAllDisciplines();
    return res.status(HttpStatusCode.OK).send(disciplines);
  } catch (error) {
    next(error);
  }
}

async function getDisciplinesByPeriod(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const idPeriod = Number(req.params.idPeriod);
  if (!idPeriod) {
    return res
      .status(HttpStatusCode.BAD_REQUEST)
      .send(HttpStatusText.BAD_REQUEST);
  }
  try {
    const disciplines = await disciplinesService.fetchDisciplinesByPeriod(
      idPeriod
    );
    return res.status(HttpStatusCode.OK).send(disciplines);
  } catch (error) {
    next(error);
  }
}

export { getAllDisciplines, getDisciplinesByPeriod };
