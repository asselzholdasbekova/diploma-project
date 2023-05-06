import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationRequestDto } from './dto/create-location-request.dto';
import { UpdateLocationRequestDto } from './dto/update-location-request.dto';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post()
  create(@Body() dto: CreateLocationRequestDto) {
    return this.locationsService.create(dto);
  }

  @Get()
  findAll() {
    return this.locationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.locationsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() dto: UpdateLocationRequestDto
  ) {
    return this.locationsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.locationsService.remove(id);
  }
}
