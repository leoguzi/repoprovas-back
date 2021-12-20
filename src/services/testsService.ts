import { getManager, getRepository, QueryBuilder, RelationId } from 'typeorm';
import Category from '../entities/Category';
import Test from '../entities/Test';

interface TestsResponse {
  category: string;
  tests: Test[];
}

async function registerTest(test: Test) {
  await getRepository(Test).insert(test);
}

async function fetchTestsByProfessor(
  idProfessor: number
): Promise<TestsResponse[]> {
  const categories = await getRepository(Category).find();

  const categoriesTests = categories.map(async (category) => {
    const categoryTests = await getRepository(Test).find({
      where: {
        professor: { id: idProfessor },
        category: { id: category.id },
      },
      relations: ['discipline'],
    });
    return {
      category: category.name,
      tests: categoryTests,
    };
  });
  const solvedPromisses = await Promise.all(categoriesTests);
  const testsByCategory = solvedPromisses.filter(
    (category) => category.tests.length > 0
  );

  return testsByCategory;
}

async function fetchTestsByDiscipline(
  idDiscipline: number
): Promise<TestsResponse[]> {
  const categories = await getRepository(Category).find();

  const categoriesTests = categories.map(async (category) => {
    const categoryTests = await getRepository(Test).find({
      where: {
        discipline: { id: idDiscipline },
        category: { id: category.id },
      },
      relations: ['professor'],
    });
    return {
      category: category.name,
      tests: categoryTests,
    };
  });
  const solvedPromisses = await Promise.all(categoriesTests);
  const testsByCategory = solvedPromisses.filter(
    (category) => category.tests.length > 0
  );

  return testsByCategory;
}

export { registerTest, fetchTestsByProfessor, fetchTestsByDiscipline };
