import Professor from '../entities/Professor';
import { getRepository } from 'typeorm';

async function fetchAllProfessors(): Promise<Professor[]> {
  const professors = await getRepository(Professor).find({
    relations: ['disciplines'],
  });
  return professors;
}

export { fetchAllProfessors };
