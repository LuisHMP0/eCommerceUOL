import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateCheckoutDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  companyName?: string;

  @IsString()
  zipCode: string;

  @IsString()
  country: string;

  @IsString()
  streetAddress: string;

  @IsString()
  city: string;

  @IsString()
  province: string;

  @IsOptional()
  @IsString()
  addOnAddress?: string;

  @IsEmail()
  emailAddress: string;

  @IsOptional()
  @IsString()
  additionalInfo?: string;
}
