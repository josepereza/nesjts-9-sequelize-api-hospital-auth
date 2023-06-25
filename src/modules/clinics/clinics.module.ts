import { Module } from '@nestjs/common';
import { ClinicsService } from './clinics.service';
import { ClinicsController } from './clinics.controller';
import { clinicsProviders } from './clinics.providers';

@Module({
  providers: [ClinicsService, ...clinicsProviders],
  controllers: [ClinicsController]
})
export class ClinicsModule {}
