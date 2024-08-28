import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ZipCodeService {
  constructor(private readonly httpService: HttpService) {}

  async verifyZipCode(zipCode: string): Promise<any> {
    try {
      console.log(`Verifying ZIP code: ${zipCode}`);
      const response = await this.httpService.get(`https://viacep.com.br/ws/${zipCode}/json/`).toPromise();
      console.log(`API Response:`, response.data);
      return response.data;
    } catch (error) {
      console.error('Error from API:', error.response?.data || error.message);
      throw new Error('[ZipCodeService] Invalid ZIP code');
    }
  }
  
}

