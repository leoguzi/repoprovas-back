import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import Period from './Period';

@Entity('disciplines')
export default class Discipline {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Period, { eager: true })
  @JoinColumn({ name: 'id_period' })
  period: Period;
}
