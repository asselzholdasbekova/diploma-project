import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfoEntity, ProductEntity } from '@app/server/entities';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [TypeOrmModule.forFeature([
    ProductEntity,
    InfoEntity
  ])]
})
export class ProductsModule {}
