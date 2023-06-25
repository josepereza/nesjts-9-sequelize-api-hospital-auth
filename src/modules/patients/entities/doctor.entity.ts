import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';
import { Clinic } from '../../clinics/clinics.entity';
import { Patient } from './patient.entity';
import { PatientDoctor } from './patientDoctor.entity';

@Table
export class Doctor extends Model<Doctor> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  surname: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  speciality: string;

  @BelongsToMany(() => Patient, () => PatientDoctor)
  patients: Patient[];
}
