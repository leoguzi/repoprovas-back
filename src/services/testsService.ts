import { getManager, getRepository, QueryBuilder, RelationId } from 'typeorm';
import Category from '../entities/Category';
import Discipline from '../entities/Discipline';
import Test from '../entities/Test';

interface TestsByCategory {
  category: string;
  tests: Test[];
}

interface TestsByPeriod {
  discipline: string;
  tests: Test[];
}

async function registerTest(test: Test) {
  await getRepository(Test).insert(test);
}

async function fetchTestsByProfessor(
  idProfessor: number
): Promise<TestsByCategory[]> {
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

async function fetchTestsByPeriod(idPeriod: number) {
  const disciplines = await getRepository(Discipline).find();
  const categories = await getRepository(Category).find();

  const disciplinesTests = disciplines.map(async (discipline) => {
    const disciplineTests = await getRepository(Test).find({
      where: {
        discipline: { id: discipline.id },
      },
    });
    return {
      discipline: discipline,
      tests: disciplineTests,
    };
  });
  const solvedPromisses = await Promise.all(disciplinesTests);
  const periodTests = solvedPromisses.filter(
    (discipline) =>
      discipline.tests.length > 0 &&
      discipline.discipline.period.id === idPeriod
  );

  const tests = periodTests.map((line) => ({
    discipline: line.discipline.name,
    tests: categories.map((category) => ({
      category: category.name,
      tests: line.tests.map((test) => {
        if (test.category.id === category.id) {
          return {
            name: test.name,
            link: test.link,
            professor: test.professor.name,
          };
        }
      }),
    })),
  }));

  return tests;
}

export { registerTest, fetchTestsByProfessor, fetchTestsByPeriod };