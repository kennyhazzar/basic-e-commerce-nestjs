import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { ProductEntity } from 'src/product/product.entity';
import { CartEntity } from 'src/cart/cart.entity';
import { Users } from 'src/auth/user.entity';
import { OrderService } from './order.service';
import { CartService } from 'src/cart/cart.service';
import { ProductService } from 'src/product/product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity, ProductEntity, CartEntity, Users]),
  ],
  controllers: [OrderController],
  providers: [OrderService, CartService, ProductService],
})
export class OrderModule {}
