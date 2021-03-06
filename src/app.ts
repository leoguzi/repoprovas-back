import 'reflect-metadata';
import connectDatabase from './database';
import express from 'express';
import cors from 'cors';
import categoriesRouter from './routers/categoriesRouter';
import disciplinesRouter from './routers/disciplinesRouter';
import professorsRouter from './routers/professorsRouter';
import testsRouter from './routers/testsRouter';
import periodsRouter from './routers/periodsRouter';

export async function init() {
  await connectDatabase();
}

const app = express();
app.use(cors());
app.use(express.json());

// CATEGORIES
app.use('/categories', categoriesRouter);

// DISCIPLINES
app.use('/disciplines', disciplinesRouter);

//PROFESSORS
app.use('/professors', professorsRouter);

//TESTS
app.use('/tests', testsRouter);

// PERIODS
app.use('/periods', periodsRouter);

export default app;
