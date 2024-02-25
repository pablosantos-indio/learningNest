import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfessionalModule } from './professional/professional.module';
import { SkillModule } from './skill/skill.module';

@Module({
  imports: [ProfessionalModule, SkillModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
