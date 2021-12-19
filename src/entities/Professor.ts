import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  getRepository,
} from 'typeorm';
import Discipline from './Discipline';
import Test from './Test';

@Entity('professors')
export default class Professor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @ManyToMany(() => Discipline, (discipline) => discipline.id)
  @JoinTable({
    name: 'professor_discipline',
    joinColumn: {
      name: 'id_professor',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'id_discipline',
      referencedColumnName: 'id',
    },
  })
  disciplines: Discipline[];
}
