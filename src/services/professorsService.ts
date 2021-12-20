import Professor from '../entities/Professor';
import { getRepository } from 'typeorm';
import Test from '../entities/Test';
import Discipline from '../entities/Discipline';

interface professorsResponse {
  id: number;
  name: string;
  testsQty: number;
  disciplines: Discipline[];
}

async function fetchAllProfessors(): Promise<professorsResponse[]> {
  let professors = await getRepository(Professor).find();

  const professorsWithNumberOfTests = professors.map(async (professor) => {
    const tests = await getRepository(Test).find({
      where: { professor: { id: professor.id } },
      relations: ['professor'],
    });
    return { ...professor, testsQty: tests.length };
  });

  return Promise.all(professorsWithNumberOfTests);
}

export { fetchAllProfessors };
