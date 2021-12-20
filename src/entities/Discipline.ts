import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import Period from './Period';
import Professor from './Professor';

@Entity('disciplines')
export default class Discipline {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Period, { eager: true })
  @JoinColumn({ name: 'id_period' })
  period: Period;

  @ManyToMany(() => Professor, (professor) => professor.id)
  @JoinTable({
    name: 'professor_discipline',
    joinColumn: {
      name: 'id_discipline',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'id_professor',
      referencedColumnName: 'id',
    },
  })
  professors: Professor[];
}
