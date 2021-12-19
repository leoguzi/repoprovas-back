import Professor from '../entities/Professor';
import { getRepository } from 'typeorm';
import Test from '../entities/Test';

async function fetchAllProfessors() {
  let professors = await getRepository(Professor).find();

  const professorsWithNumberOfTests = professors.map(async (professor) => {
    const tests = await getRepository(Test).find({
      where: { professor: { id: professor.id } },
      relations: ['professor'],
    });
    return { ...professor, testsNumber: tests.length };
  });

  return Promise.all(professorsWithNumberOfTests);
}

export { fetchAllProfessors };
