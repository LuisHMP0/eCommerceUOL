import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, Checkout } from '@prisma/client';
import { ZipCodeService } from './zipcode.service';
import { CreateCheckoutDto } from './dto/createCheckout.dto';

@Injectable()
export class CheckoutService {
  constructor(
    private prisma: PrismaService, 
    private readonly zipCodeService: ZipCodeService
  ) {}

  async createCheckout(userId: string, data: CreateCheckoutDto): Promise<Checkout> {

    if (!userId) {
      throw new Error('User ID is required');
    }

    if (data.zipCode) {
      try {
        const zipCodeData = await this.zipCodeService.verifyZipCode(data.zipCode);
        if (zipCodeData.erro) {
          throw new Error('Invalid ZIP code');
        }
      } catch (error) {
        console.error('[SERVICE] Error verifying ZIP code:', error.message);
        throw new Error('[SERVICE] Invalid ZIP code');
      }
    }    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return this.prisma.checkout.create({
      data: {
        ...data,
        user: { 
          connect: { id: user.id }
        },
      },
    });
  }
}



