import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { PrismaModule } from 'prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path'
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CheckoutModule } from './checkout/checkout.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt'

@Module({
  providers: [PrismaService], 
  imports: [
    ConfigModule.forRoot(),
    ProductModule,
    PrismaModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/',
    }),
    UserModule,
    AuthModule,
    CheckoutModule,
    JwtModule.registerAsync({
      imports: [ConfigModule], 
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
      inject: [ConfigService],
    }),
  ],
})

export class AppModule {}
