import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Professional } from '../professional/professional.entity';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Professional)
  professionals: Professional[];
}
