import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { User } from '../../modules/users/user.entity';
import { Clinic } from 'src/modules/clinics/clinics.entity';
import { PatientDoctor } from 'src/modules/patients/entities/patientDoctor.entity';
import { Doctor } from 'src/modules/patients/entities/doctor.entity';
import { Patient } from 'src/modules/patients/entities/patient.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([User, Clinic, Doctor, Patient, PatientDoctor]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
