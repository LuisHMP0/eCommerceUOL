import { Controller, Post, Body, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CheckoutService } from './checkout.service';
import { Request } from 'express';
import { CreateCheckoutDto } from './dto/createCheckout.dto';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createCheckout(@Req() req: Request, @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true})) checkoutData: CreateCheckoutDto) {
    const userId = req.user['id']; 
    if (!userId) {
      throw new Error('[Cotroller] User ID is required');
    }

    return this.checkoutService.createCheckout(userId, checkoutData);
  }
}
