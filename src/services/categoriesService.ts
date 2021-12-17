import Category from '../entities/Category';
import { getRepository } from 'typeorm';

async function fetchAllCategories(): Promise<Category[]> {
  const categories = await getRepository(Category).find();
  return categories;
}

export { fetchAllCategories };
