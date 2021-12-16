import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import Category from './Category';
import Professor from './Professor';
import Discipline from './Discipline';
@Entity('tests')
export default class Test {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  link: string;

  @OneToOne(() => Category, { eager: true })
  @JoinColumn({ name: 'id_category' })
  idCategory: Category;

  @OneToOne(() => Professor, { eager: true })
  @JoinColumn({ name: 'id_professor' })
  idProfessor: Professor;

  @OneToOne(() => Discipline, { eager: true })
  @JoinColumn({ name: 'id_discipline' })
  idDiscipline: Discipline;
}
