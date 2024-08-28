import { IsString, IsEmail, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateCheckoutDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  
  @IsOptional()
  @IsString()
  companyName?: string;

  @IsNotEmpty()
  @IsString()
  zipCode: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsString()
  streetAddress: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  province: string;

  @IsOptional()
  @IsString()
  addOnAddress?: string;

  @IsNotEmpty()
  @IsEmail()
  emailAddress: string;

  @IsOptional()
  @IsString()
  additionalInfo?: string;
}
