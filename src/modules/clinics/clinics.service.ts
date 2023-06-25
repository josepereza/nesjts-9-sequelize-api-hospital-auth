import { Injectable, Inject } from '@nestjs/common';
import { CLINIC_REPOSITORY } from 'src/core/constants';
import { User } from '../users/user.entity';
import { Clinic } from './clinics.entity';
import { ClinicDto } from './dto/clinics.dto';
import { Patient } from '../patients/entities/patient.entity';

@Injectable()
export class ClinicsService {
  constructor(
    @Inject(CLINIC_REPOSITORY)
    private readonly clinicRepository: typeof Clinic,
  ) {}

  async create(clinic: ClinicDto): Promise<Clinic> {
    return await this.clinicRepository.create<Clinic>({ ...clinic });
  }

  async findAll(): Promise<Clinic[]> {
    return await this.clinicRepository.findAll<Clinic>({ include: Patient });
  }

  async findOne(id): Promise<Clinic> {
    return await this.clinicRepository.findOne({
      where: { id },
      include: [{ model: User, attributes: { exclude: ['password'] } }],
    });
  }

  async delete(id, userId) {
    return await this.clinicRepository.destroy({
      where: { id },
    });
  }

  async update(id, data) {
    const [numberOfAffectedRows] =
      await this.clinicRepository.update(
        { ...data },
        { where: { id }, returning: true },
      );
    return { numberOfAffectedRows };
  }
}
