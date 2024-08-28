import { Module } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { CheckoutController } from './checkout.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { ZipCodeModule } from './zipcode.module';

@Module({
  imports: [PrismaModule, ZipCodeModule],
  providers: [CheckoutService],
  controllers: [CheckoutController]
})
export class CheckoutModule {}
