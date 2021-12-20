import Period from '../entities/Period';
import { getRepository } from 'typeorm';

async function fetchAllPeriods(): Promise<Period[]> {
  const periods = await getRepository(Period).find();
  return periods;
}

export { fetchAllPeriods };
