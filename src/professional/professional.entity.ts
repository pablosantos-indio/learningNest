import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { SkillEntity } from '../skill/skill.entity';

@Entity("Professional")
export class ProfessionalEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @ManyToMany(() => SkillEntity)
  @JoinTable()
  skills: SkillEntity[];
}
