import { Doctor } from './entities/doctor.entity';
import { DOCTOR_REPOSITORY } from '../../core/constants';

export const doctorProviders = [
  {
    provide: DOCTOR_REPOSITORY,
    useValue: Doctor,
  },
];
