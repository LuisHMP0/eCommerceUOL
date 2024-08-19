import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getAllProducts(orderBy: string, page: number = 1, limit: number = 16): Promise<Product[]> {

    let orderByClause;

    switch (orderBy) {
      case 'nameAZ': 
        orderByClause = { title: 'asc' };
        break;

      case 'nameZA': 
        orderByClause ={ title: 'desc' };
        break

      case 'priceDesc': 
        orderByClause = { price: 'desc' };
        break; 

      case 'priceAsc': 
        orderByClause = { price: 'asc' };
        break;

      default: 
        orderByClause = {};

    }

    return this.prisma.product.findMany({
      orderBy: orderByClause,
      skip: (page - 1) * limit,
      take: Number(limit),
    }); 
    
  }

  async getProductById(id: string): Promise<Product> {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    return product;
  }
}