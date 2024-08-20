import { Controller, Get, NotFoundException, Param, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from '@prisma/client';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts(
    @Query('orderBy') orderBy: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ): Promise<Product[]> {
    const currentPage = parseInt(page, 10) || 1;
    const currentLimit = parseInt(limit, 10) || 16;
    return this.productService.getAllProducts(orderBy, currentPage, currentLimit);
  }

  @Get(':id')
  async getProductById(@Param('id') id: string): Promise<{ product: Product; relatedProducts: Product[] }> {
  return this.productService.getProductById(id);
}

};