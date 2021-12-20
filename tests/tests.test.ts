import '../src/setup.ts';
import app, { init } from '../src/app';
import supertest from 'supertest';
import Test from '../src/entities/Test';
import faker from 'faker';
import { getConnection, getRepository } from 'typeorm';

interface TestMock {
  name: string;
  category: number;
  link: string;
  professor: number;
  discipline: number;
}

describe('POST /tests', () => {
  beforeAll(async () => {
    await init();
  });

  let test: TestMock;
  beforeEach(() => {
    test = {
      name: faker.datatype.string(6),
      category: faker.datatype.number({ min: 1, max: 5 }),
      link: faker.internet.url(),
      professor: faker.datatype.number({ min: 1, max: 8 }),
      discipline: faker.datatype.number({ min: 1, max: 26 }),
    };
  });

  it('Register a test', async () => {
    const result = await supertest(app).post('/tests').send(test);
    expect(result.status).toEqual(201);
    const dbTest = await getRepository(Test).findOne({ loadRelationIds: true });
    expect(dbTest).toEqual({ ...test, id: expect.any(Number) });
  });

  it('Returns 400 if invalid body', async () => {
    delete test.name;
    const result = await supertest(app).post('/tests').send(test);
    expect(result.status).toEqual(400);
  });

  afterEach(async () => {
    await getConnection().createQueryBuilder().delete().from(Test).execute();
  });

  afterAll(async () => {
    await getConnection().close();
  });
});
