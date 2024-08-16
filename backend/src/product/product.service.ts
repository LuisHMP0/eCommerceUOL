import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Product } from '@prisma/client';
import { title } from 'process';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getAllProducts(orderBy: string): Promise<Product[]> {

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
    }); 
  }



}