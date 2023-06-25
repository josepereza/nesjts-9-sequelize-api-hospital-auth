import { PatientDoctor } from './entities/patientDoctor.entity';
import { PATIENTDOCTOR_REPOSITORY } from '../../core/constants';

export const patientDoctorProviders = [
  {
    provide: PATIENTDOCTOR_REPOSITORY,
    useValue: PatientDoctor,
  },
];
