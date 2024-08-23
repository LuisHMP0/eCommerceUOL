import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: '[ERRO] Name is invalid' })
  @IsNotEmpty({ message: '[ERRO] Name is invalid' })
  name: string;

  @IsEmail({}, { message: '[ERRO] Email is invalid' })
  @IsNotEmpty({ message: '[ERRO] The email cannot be empty' })
  email: string;

  @IsString({ message: '[ERRO] Password is invalid' })
  @MinLength(8, { message: '[ERRO] Password must be at least 8 characters long' })
  password: string;
}
