import Discipline from '../entities/Discipline';
import { getRepository } from 'typeorm';

async function fetchAllDisciplines(): Promise<Discipline[]> {
  const categories = await getRepository(Discipline).find({
    relations: ['professors', 'period'],
  });
  return categories;
}

export { fetchAllDisciplines };
