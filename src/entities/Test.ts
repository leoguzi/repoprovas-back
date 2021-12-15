import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('tests')
export default class Test {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  link: string;
  @Column()
  id_category: number;
  @Column()
  id_professor: number;
  @Column()
  id_discipline: number;
}
