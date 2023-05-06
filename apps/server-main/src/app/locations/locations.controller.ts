import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationRequestDto } from './dto/create-location-request.dto';
import { UpdateLocationRequestDto } from './dto/update-location-request.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('locations')
@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @ApiOperation({ summary: 'Location creation' })
  @ApiOkResponse({})                                              // CHANGE
  @Post()
  create(@Body() dto: CreateLocationRequestDto) {
    return this.locationsService.create(dto);
  }

  @ApiOperation({ summary: 'Locations` list' })
  @ApiOkResponse({})                                              // CHANGE
  @Get()
  findAll() {
    return this.locationsService.findAll();
  }

  @ApiOperation({ summary: 'Location by id' })
  @ApiOkResponse({})                                              // CHANGE
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.locationsService.findOne(id);
  }

  @ApiOperation({ summary: 'Location change' })
  @ApiOkResponse({})                                              // CHANGE
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() dto: UpdateLocationRequestDto
  ) {
    return this.locationsService.update(id, dto);
  }

  @ApiOperation({ summary: 'Location removal' })
  @ApiOkResponse({})                                              // CHANGE
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.locationsService.remove(id);
  }
}
