import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  private formatPrice(price: number): string {
    return new Intl.NumberFormat('pt-BR').format(price);
  }

  private priceDiscount(price: number, discount: number | null): number {
    if (discount == null || discount <= 0) {
      return price;
    }
    const finalPrice = price * (1 - discount);
    return parseFloat(finalPrice.toFixed(2))
  }

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

    const products = await this.prisma.product.findMany({
      orderBy: orderByClause,
      skip: (page - 1) * limit,
      take: Number(limit),
    }); 

    return products.map(product => {
      const discountedPrice = this.priceDiscount(product.price, product.discount);
      console.log(`preço original: ${product.price}, desconto: ${product.discount}, preço final: ${this.priceDiscount(product.price, product.discount)}`)
      return {
        ...product,
        price: discountedPrice, 
        formattedPrice: this.formatPrice(discountedPrice), 
      };
    });
    
  }

  async getProductById(id: string, page: number = 1, limit: number = 4): Promise<{ product: Product; relatedProducts: Product[] }> {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { category: true },
    });

    const relatedProducts = await this.prisma.product.findMany({
      where: {
        categoryId: product.categoryId,
        id: { not: id },
      },
      skip: (page - 1) * limit,
      take: limit, 
    });

    const formattedProduct = {
      ...product,
      price: this.priceDiscount(product.price, product.discount), 
      formattedPrice: this.formatPrice(this.priceDiscount(product.price, product.discount)), 
    };

    const formattedRelatedProducts = relatedProducts.map(relatedProduct => {
      const discountedPrice = this.priceDiscount(relatedProduct.price, relatedProduct.discount);
      return {
        ...relatedProduct,
        price: discountedPrice,
        formattedPrice: this.formatPrice(discountedPrice), 
      };
    });
    
    return { product: formattedProduct, relatedProducts: formattedRelatedProducts }
  }
}