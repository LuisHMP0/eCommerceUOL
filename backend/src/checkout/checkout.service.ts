import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, Checkout } from '@prisma/client';

@Injectable()
export class CheckoutService {
  constructor(private prisma: PrismaService) {}

  async createCheckout(userId: string, data: Prisma.CheckoutCreateInput): Promise<Checkout> {
    if (!userId) {
      throw new Error('User ID is required');
    }

    const user = await this.prisma.user.findUnique({
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



