import { Injectable, Inject } from '@nestjs/common';
import {
  DOCTOR_REPOSITORY,
  PATIENTDOCTOR_REPOSITORY,
  PATIENT_REPOSITORY,
} from 'src/core/constants';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';
import { PatientDoctor } from './entities/patientDoctor.entity';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class PatientsService {
  constructor(
    @Inject(DOCTOR_REPOSITORY)
    private readonly doctorRepository: typeof Doctor,
    @Inject(PATIENT_REPOSITORY)
    private readonly patientRepository: typeof Patient,
    @Inject(PATIENTDOCTOR_REPOSITORY)
    private readonly patientDoctorRepository: typeof PatientDoctor,
  ) {}
  async create(createPatientDto: CreatePatientDto) {
    return await this.patientRepository.create<Patient>({
      ...createPatientDto,
    });
  }

  async assignDoctor(doctor, patient_id) {
    console.log(doctor, patient_id);
    return await this.patientDoctorRepository.create({
      doctorId: doctor.doctorId,
      patientId: Number(patient_id),
    });
  }

  findAll() {
    return this.patientRepository.findAll({ include: Doctor });
    return `This action returns all patients`;
  }

  findAllDoctors() {
    return this.doctorRepository.findAll();
    return `This action returns all patients`;
  }

  findOne(id: number) {
    return this.patientRepository.findByPk(id, { include: Doctor });
  }

  findDoctors() {
    return this.doctorRepository.findAll({});
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${id} patient`;
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
