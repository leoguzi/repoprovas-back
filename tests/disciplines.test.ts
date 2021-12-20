import '../src/setup.ts';
import app, { init } from '../src/app';
import supertest from 'supertest';
import { getConnection } from 'typeorm';

describe('GET /disciplines', () => {
  beforeAll(async () => await init());

  it('Should return a list of disciplines', async () => {
    const result = await supertest(app).get('/disciplines');
    expect(result.body[0]).toEqual({
      id: expect.any(Number),
      name: expect.any(String),
      period: {
        id: expect.any(Number),
        name: expect.any(String),
      },
      professors: expect.any(Array),
    });
  });
  afterAll(async () => {
    await getConnection().close();
  });
});

describe('GET /disciplines/:iPeriod', () => {
  beforeAll(async () => await init());
  it('Should return a list of disciplines of the provided period with the tests qty', async () => {
    const idPeriod = 1;
    const result = await supertest(app).get('/disciplines/' + idPeriod);

    expect(result.body[0]).toEqual({
      id: expect.any(Number),
      name: expect.any(String),
      period: {
        id: idPeriod,
        name: expect.any(String),
      },
      testsQty: expect.any(Number),
    });
  });

  it('Returns 400 if invalid idPeriod is provided', async () => {
    const idPeriod = 0;
    const result = await supertest(app).get('/disciplines/' + idPeriod);

    expect(result.status).toEqual(400);
  });
  afterAll(async () => {
    await getConnection().close();
  });
});
