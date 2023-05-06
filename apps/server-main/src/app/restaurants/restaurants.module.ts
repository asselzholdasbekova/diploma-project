import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfoEntity, RestaurantEntity } from '@app/server/entities';

@Module({
  controllers: [RestaurantsController],
  providers: [RestaurantsService],
  imports: [TypeOrmModule.forFeature([
    RestaurantEntity,
    InfoEntity
  ])]
})
export class RestaurantsModule {}
