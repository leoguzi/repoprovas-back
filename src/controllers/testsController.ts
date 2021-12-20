import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode, HttpStatusText } from '../enums/http.enum';
import * as testsService from '../services/testsService';
import testSchema from '../validation/testSchema';

async function createTest(req: Request, res: Response, next: NextFunction) {
  const { error } = testSchema.validate(req.body);
  if (error) {
    return res.status(400).send('Invalid data!');
  }
  try {
    await testsService.registerTest(req.body);
    return res.sendStatus(HttpStatusCode.CREATED);
  } catch (error) {
    next(error);
  }
}

async function getTestsByProfessor(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const idProfessor = Number(req.params.idProfessor);
  if (!idProfessor) {
    return res
      .status(HttpStatusCode.BAD_REQUEST)
      .send(HttpStatusText.BAD_REQUEST);
  }
  const tests = await testsService.fetchTestsByProfessor(idProfessor);
  return res.status(HttpStatusCode.OK).send(tests);
}

async function getTestsByDiscipline(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const idDiscipline = Number(req.params.idDiscipline);
  if (!idDiscipline) {
    return res
      .status(HttpStatusCode.BAD_REQUEST)
      .send(HttpStatusText.BAD_REQUEST);
  }
  const tests = await testsService.fetchTestsByDiscipline(idDiscipline);
  return res.status(HttpStatusCode.OK).send(tests);
}

export { createTest, getTestsByProfessor, getTestsByDiscipline };
