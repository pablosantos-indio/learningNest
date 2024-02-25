import { Injectable } from '@nestjs/common';
import { ProfessionalEntity } from './professional.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfessionalRepository } from './professional.repository';

@Injectable()
export class ProfessionalService {
    constructor(
        @InjectRepository(ProfessionalEntity)
        private readonly professionalRepository: Repository<ProfessionalRepository>,
    ) {}

    async findAll() {
        return await this.professionalRepository.find();
    }
}
