import Test from '../entities/Test';
import { getRepository } from 'typeorm';

async function registerTest(test: Test) {
  await getRepository(Test).insert(test);
}

export { registerTest };
