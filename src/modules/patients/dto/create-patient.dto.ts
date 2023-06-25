import { IsNotEmpty, MinLength } from 'class-validator';

export class CreatePatientDto {
  @IsNotEmpty()
  @MinLength(4)
  readonly name: string;

  @IsNotEmpty()
  @MinLength(12)
  readonly surname: string;

  @IsNotEmpty()
  readonly dni: string;

  @IsNotEmpty()
  readonly clinicId: number;
}
