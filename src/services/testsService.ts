import Test from '../entities/Test';
import { getRepository } from 'typeorm';
import Category from '../entities/Category';

interface TestsByCategory {
  category: string;
  tests: Test[];
}

async function registerTest(test: Test) {
  await getRepository(Test).insert(test);
}

async function fetchTestsByProfessor(
  idProfessor: number
): Promise<TestsByCategory[]> {
  const categories = await getRepository(Category).find();

  let categoriesTests = categories.map(async (category) => {
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

export { registerTest, fetchTestsByProfessor };
