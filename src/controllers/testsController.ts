import { Request, Response, NextFunction } from 'express';
import * as testsService from '../services/testsService';
import testSchema from '../validation/testSchema';

async function createTest(req: Request, res: Response, next: NextFunction) {
  const { error } = testSchema.validate(req.body);
  if (error) {
    return res.status(400).send('Invalid data!');
  }
  try {
    await testsService.registerTest(req.body);
    return res.sendStatus(201);
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
    return res.status(400).send({ message: 'Bad request' });
  }
  const tests = await testsService.fetchTestsByProfessor(idProfessor);
  return res.status(200).send(tests);
}

async function getTestsByPeriod(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const idPeriod = Number(req.params.idPeriod);
  if (!idPeriod) {
    return res.status(400).send({ message: 'Bad request' });
  }
  const tests = await testsService.fetchTestsByPeriod(idPeriod);
  return res.status(200).send(tests);
}

export { createTest, getTestsByProfessor, getTestsByPeriod };
