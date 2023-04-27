import { Injectable } from '@nestjs/common';
import { CreatePrayerRoomDto } from './dto/create-prayer-room.dto';
import { UpdatePrayerRoomDto } from './dto/update-prayer-room.dto';

@Injectable()
export class PrayerRoomsService {
  create(createPrayerRoomDto: CreatePrayerRoomDto) {
    return 'This action adds a new prayerRoom';
  }

  findAll() {
    return `This action returns all prayerRooms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prayerRoom`;
  }

  update(id: number, updatePrayerRoomDto: UpdatePrayerRoomDto) {
    return `This action updates a #${id} prayerRoom`;
  }

  remove(id: number) {
    return `This action removes a #${id} prayerRoom`;
  }
}
