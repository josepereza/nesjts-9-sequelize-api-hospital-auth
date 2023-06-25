import { Patient } from './entities/patient.entity';
import { PATIENT_REPOSITORY } from '../../core/constants';

export const patientsProviders = [
  {
    provide: PATIENT_REPOSITORY,
    useValue: Patient,
  },
];
