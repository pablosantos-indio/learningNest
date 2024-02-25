import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfessionalModule } from './professional/professional.module';
import { SkillModule } from './skill/skill.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: "localhost",
        port: 3306,
        username: "user",
        password: "secret",
        database: "dbNest",
        entities: [`${__dirname}/**/*.entity{.ts,.js}`],
        synchronize: process.env.BD_SYNC === 'true',
        logging: 'all',
      }),    
    ProfessionalModule, SkillModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


