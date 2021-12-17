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

export { createTest };
