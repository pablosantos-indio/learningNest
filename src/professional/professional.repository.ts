import { Repository } from 'typeorm';
import { ProfessionalEntity } from './professional.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfessionalRepository extends Repository<ProfessionalEntity> {
}
