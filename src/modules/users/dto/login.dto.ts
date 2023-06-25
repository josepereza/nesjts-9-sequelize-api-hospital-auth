import { IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;
}
