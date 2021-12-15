import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categories')
export default class Categorie {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}
