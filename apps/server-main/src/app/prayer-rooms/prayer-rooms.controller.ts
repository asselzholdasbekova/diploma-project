import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrayerRoomsService } from './prayer-rooms.service';
import { CreatePrayerRoomRequestDto } from './dto/create-prayer-room.dto';
import { UpdatePrayerRoomRequestDto } from './dto/update-prayer-room.dto';

@Controller('prayer-rooms')
export class PrayerRoomsController {
  constructor(private readonly prayerRoomsService: PrayerRoomsService) {}

  @Post()
  create(@Body() dto: CreatePrayerRoomRequestDto) {
    return this.prayerRoomsService.create(dto);
  }

  @Get()
  findAll() {
    return this.prayerRoomsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prayerRoomsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number, 
    @Body() dto: UpdatePrayerRoomRequestDto
  ) {
    return this.prayerRoomsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.prayerRoomsService.remove(id);
  }
}
