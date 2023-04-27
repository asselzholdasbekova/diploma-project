import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrayerRoomsService } from './prayer-rooms.service';
import { CreatePrayerRoomDto } from './dto/create-prayer-room.dto';
import { UpdatePrayerRoomDto } from './dto/update-prayer-room.dto';

@Controller('prayer-rooms')
export class PrayerRoomsController {
  constructor(private readonly prayerRoomsService: PrayerRoomsService) {}

  @Post()
  create(@Body() createPrayerRoomDto: CreatePrayerRoomDto) {
    return this.prayerRoomsService.create(createPrayerRoomDto);
  }

  @Get()
  findAll() {
    return this.prayerRoomsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prayerRoomsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrayerRoomDto: UpdatePrayerRoomDto) {
    return this.prayerRoomsService.update(+id, updatePrayerRoomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prayerRoomsService.remove(+id);
  }
}
