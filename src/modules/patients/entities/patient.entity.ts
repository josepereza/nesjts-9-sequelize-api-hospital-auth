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
import { Doctor } from '../entities/doctor.entity';
import { PatientDoctor } from './patientDoctor.entity';
@Table
export class Patient extends Model<Patient> {
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
  dni: string;

  @ForeignKey(() => Clinic)
  @Column
  clinicId: number;

  @BelongsTo(() => Clinic)
  clinic: Clinic;

  @BelongsToMany(() => Doctor, () => PatientDoctor)
  doctors: Doctor[];
}
