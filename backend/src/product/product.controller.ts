import { Controller, Get, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from '@prisma/client';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts(@Query('orderBy') orderBy: string): Promise<Product[]> {
    return this.productService.getAllProducts(orderBy);
  }
};