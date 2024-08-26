import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ZipCodeService {
  constructor(private readonly httpService: HttpService) {}

  async verifyZipCode(zipCode: string): Promise<any> {
    try {
      const response = await this.httpService.get(`http://api.zippopotam.us/br/${zipCode}`).toPromise();
      return response.data;
    } catch (error) {
      throw new Error('Invalid ZIP code');
    }
  }
}
