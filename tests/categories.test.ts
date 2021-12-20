import '../src/setup.ts';
import app, { init } from '../src/app';
import supertest from 'supertest';
import { getConnection } from 'typeorm';

describe('GET /categories', () => {
  beforeAll(async () => await init());

  it('Should return a list of categories', async () => {
    const result = await supertest(app).get('/categories');
    expect(result.body[0]).toEqual({
      id: expect.any(Number),
      name: expect.any(String),
    });
  });

  afterAll(async () => {
    await getConnection().close();
  });
});
