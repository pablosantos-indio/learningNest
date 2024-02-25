import { Controller, Get } from '@nestjs/common';
import { ProfessionalService } from './professional.service';

@Controller('professional')
export class ProfessionalController {
    constructor(private readonly professionalService: ProfessionalService) {}

    @Get()
    findAll() {
        return this.professionalService.findAll();
    }
}