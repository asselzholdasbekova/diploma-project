import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationEntity } from '@app/server/entities';

@Module({
  controllers: [LocationsController],
  providers: [LocationsService],
  imports: [TypeOrmModule.forFeature([
    LocationEntity
  ])]
})
export class LocationsModule {}
