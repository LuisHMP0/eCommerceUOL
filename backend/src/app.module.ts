import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { PrismaModule } from 'prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path'
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CheckoutModule } from './checkout/checkout.module';

@Module({
  providers: [PrismaService], 
  imports: [
    ProductModule,
    PrismaModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/',
    }),
    UserModule,
    AuthModule,
    CheckoutModule,
  ]
})

export class AppModule {}
