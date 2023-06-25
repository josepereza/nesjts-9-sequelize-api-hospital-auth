import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Clinic as ClinicEntity } from './clinics.entity';
import { ClinicsService } from './clinics.service';
import { ClinicDto } from './dto/clinics.dto';

@Controller('clinics')
export class ClinicsController {
  constructor(private readonly clinicService: ClinicsService) {}

  @Get()
  async findAll() {
    /* get all clinics in the database */
    return await this.clinicService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ClinicEntity> {
    /* find the clinic with id */
    const clinic = await this.clinicService.findOne(id);

    /* if the clinic doesn't exist in db, thr0w 404 */
    if (!clinic) {
      throw new NotFoundException("This Clinic doesn't exist");
    }
    /* if clinic exist, return clinic */
    return clinic;
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() clinic: ClinicDto,
    @Request() req,
  ): Promise<ClinicEntity> {
    /* create a new clinic and return the newly created clinic */
    return await this.clinicService.create(clinic);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() clinic: ClinicDto,
    @Request() req,
  ): Promise<number> {
    /* get the number of row affected and update clinic */
    const { numberOfAffectedRows } = await this.clinicService.update(
      id,
      clinic,
    );

    /* if the number of row affected is zero
        it means the clinic doesn't exist in our db */
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This Clinic doesn't exist");
    }

    /* return the updated clinic */
    return numberOfAffectedRows;
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: number, @Request() req) {
    /* delete the clinic eith id */
    const deleted = await this.clinicService.delete(id, req.user.id);

    /* if the number of row affected is zero, 
        then the clinic doesn't exist in db */
    if (deleted === 0) {
      throw new NotFoundException("This Clinic doesn't exist");
    }

    return 'Succesfully deleted';
  }
}
