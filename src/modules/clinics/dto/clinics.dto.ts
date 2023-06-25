import { IsNotEmpty, MinLength } from 'class-validator';

export class ClinicDto {
    @IsNotEmpty()
    @MinLength(4)
    readonly name: string;

    @IsNotEmpty()
    @MinLength(12)
    readonly contact: string;

    @IsNotEmpty()
    readonly address: string;
}