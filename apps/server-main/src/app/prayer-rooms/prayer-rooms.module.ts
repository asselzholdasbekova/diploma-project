import { Module } from '@nestjs/common';
import { PrayerRoomsService } from './prayer-rooms.service';
import { PrayerRoomsController } from './prayer-rooms.controller';

@Module({
  controllers: [PrayerRoomsController],
  providers: [PrayerRoomsService]
})
export class PrayerRoomsModule {}
