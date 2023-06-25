import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Doctor } from '../entities/doctor.entity';
import { Patient } from '../entities/patient.entity';
@Table
export class PatientDoctor extends Model {
  @ForeignKey(() => Doctor)
  @Column
  doctorId: number;

  @ForeignKey(() => Patient)
  @Column
  patientId: number;
}
