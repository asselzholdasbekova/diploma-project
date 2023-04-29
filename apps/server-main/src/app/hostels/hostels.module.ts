import { Module } from '@nestjs/common';
import { HostelsService } from './hostels.service';
import { HostelsController } from './hostels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HostelEntity } from '@app/server/entities';

@Module({
  controllers: [HostelsController],
  providers: [HostelsService],
  imports: [TypeOrmModule.forFeature([
    HostelEntity
  ])]
})
export class HostelsModule {}
