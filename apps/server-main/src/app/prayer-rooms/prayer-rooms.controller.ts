import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrayerRoomsService } from './prayer-rooms.service';
import { CreatePrayerRoomRequestDto } from './dto/create-prayer-room.dto';
import { UpdatePrayerRoomRequestDto } from './dto/update-prayer-room.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('prayer-rooms')
@Controller('prayer-rooms')
export class PrayerRoomsController {
  constructor(private readonly prayerRoomsService: PrayerRoomsService) {}

  @ApiOperation({ summary: 'Prayer room creation' })
  @ApiOkResponse({})                                              // CHANGE
  @Post()
  create(@Body() dto: CreatePrayerRoomRequestDto) {
    return this.prayerRoomsService.create(dto);
  }

  @ApiOperation({ summary: 'Prayer rooms` list' })
  @ApiOkResponse({})                                              // CHANGE
  @Get()
  findAll() {
    return this.prayerRoomsService.findAll();
  }

  @ApiOperation({ summary: 'Prayer room by id' })
  @ApiOkResponse({})                                              // CHANGE
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prayerRoomsService.findOne(id);
  }

  @ApiOperation({ summary: 'Prayer room change' })
  @ApiOkResponse({})                                              // CHANGE
  @Patch(':id')
  update(
    @Param('id') id: number, 
    @Body() dto: UpdatePrayerRoomRequestDto
  ) {
    return this.prayerRoomsService.update(id, dto);
  }

  @ApiOperation({ summary: 'Prayer room removal' })
  @ApiOkResponse({})                                              // CHANGE
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.prayerRoomsService.remove(id);
  }
}
