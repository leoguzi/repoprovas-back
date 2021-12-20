import '../src/setup.ts';
import app, { init } from '../src/app';
import supertest from 'supertest';
import { getConnection } from 'typeorm';

describe('GET /professors', () => {
  beforeAll(async () => await init());

  it('Should return a list of professors with the testsQty', async () => {
    const result = await supertest(app).get('/professors');
    expect(result.body[0]).toEqual({
      id: expect.any(Number),
      name: expect.any(String),
      testsQty: expect.any(Number),
    });
  });

  afterAll(async () => {
    await getConnection().close();
  });
});
