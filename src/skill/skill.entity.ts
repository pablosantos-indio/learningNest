import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { ProfessionalEntity } from '../professional/professional.entity';

@Entity("Skill")
export class SkillEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => ProfessionalEntity)
  professionals: ProfessionalEntity[];
}
