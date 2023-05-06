import { Module } from '@nestjs/common';
import { PrayerRoomsService } from './prayer-rooms.service';
import { PrayerRoomsController } from './prayer-rooms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfoEntity, PrayerRoomEntity } from '@app/server/entities';

@Module({
  controllers: [PrayerRoomsController],
  providers: [PrayerRoomsService],
  imports: [TypeOrmModule.forFeature([
    PrayerRoomEntity,
    InfoEntity
  ])]
})
export class PrayerRoomsModule {}
