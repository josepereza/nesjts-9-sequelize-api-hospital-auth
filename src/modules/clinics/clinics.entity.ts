import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { User } from '../users/user.entity';
import { Patient } from '../patients/entities/patient.entity';

@Table
export class Clinic extends Model<Clinic> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    contact: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    address: string;

      
  @HasMany(() => Patient)
    patients: Patient[];
}