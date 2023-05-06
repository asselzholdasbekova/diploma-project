import { Module } from '@nestjs/common';
import { HostelsService } from './hostels.service';
import { HostelsController } from './hostels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HostelEntity, InfoEntity, LocationEntity, RestaurantEntity } from '@app/server/entities';

@Module({
  controllers: [HostelsController],
  providers: [HostelsService],
  imports: [TypeOrmModule.forFeature([
    HostelEntity,
    LocationEntity,
    RestaurantEntity,
    InfoEntity
  ])]
})
export class HostelsModule {}
