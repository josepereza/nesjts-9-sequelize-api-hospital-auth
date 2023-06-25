import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { patientsProviders } from './patients.providers';
import { patientDoctorProviders } from './patientDoctor.providers';
import { doctorProviders } from './doctor.providers';

@Module({
  controllers: [PatientsController],
  providers: [
    PatientsService,
    ...patientsProviders,
    ...patientDoctorProviders,
    ...doctorProviders,
  ],
})
export class PatientsModule {}
