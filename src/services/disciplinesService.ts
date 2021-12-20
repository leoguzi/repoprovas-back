import Discipline from '../entities/Discipline';
import Test from '../entities/Test';
import { getRepository } from 'typeorm';
import Period from '../entities/Period';
import Professor from '../entities/Professor';

interface disciplineResponse {
  id: number;
  name: string;
  testsQty: number;
  period: Period;
  professors: Professor[];
}
async function fetchAllDisciplines(): Promise<Discipline[]> {
  const disciplines = await getRepository(Discipline).find({
    relations: ['professors', 'period'],
  });

  return disciplines;
}

async function fetchDisciplinesByPeriod(
  period: number
): Promise<disciplineResponse[]> {
  const disciplines = await getRepository(Discipline).find({
    where: { period: { id: period } },
  });
  const disciplinesWithNumberOfTests = disciplines.map(async (discipline) => {
    const tests = await getRepository(Test).find({
      where: { discipline: { id: discipline.id } },
      relations: ['discipline'],
    });
    return { ...discipline, testsQty: tests.length };
  });

  return Promise.all(disciplinesWithNumberOfTests);
}

export { fetchAllDisciplines, fetchDisciplinesByPeriod };
