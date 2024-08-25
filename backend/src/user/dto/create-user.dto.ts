import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Name is invalid' })
  @IsNotEmpty({ message: 'Name is invalid' })
  name: string;

  @IsEmail({}, { message: 'Email is invalid' })
  @IsNotEmpty({ message: 'The email cannot be empty' })
  email: string;

  @IsString({ message: 'Password is invalid' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;
}
