import { Module } from '@nestjs/common';
import { ProductModule } from 'src/product/product.module';
import { CartService } from './cart.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from './cart.entity';
import { ProductEntity } from 'src/product/product.entity';
import { Users } from 'src/auth/user.entity';
import { CartController } from './cart.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CartEntity, ProductEntity, Users])],
  providers: [CartService, ProductModule],
  controllers: [CartController],
})
export class CartModule {}
