import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CheckoutService } from './checkout.service';
import { Request } from 'express';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createCheckout(@Req() req: Request, @Body() checkoutData: any) {
    const userId = req.user['id']; 
    if (!userId) {
      throw new Error('[CONTROLLER] User ID is required');
    }

    return this.checkoutService.createCheckout(userId, checkoutData);
  }
}
