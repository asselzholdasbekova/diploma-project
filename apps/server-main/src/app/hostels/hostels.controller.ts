import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HostelsService } from './hostels.service';
import { CreateHostelRequestDto } from './dto/create-hostel-request.dto';
import { UpdateHosteRequestDto } from './dto/update-hostel-request.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('hostels')
@Controller('hostels')
export class HostelsController {
  constructor(private readonly hostelsService: HostelsService) {}

  @ApiOperation({ summary: 'Hostel creation' })
  @ApiOkResponse({})                                              // CHANGE
  @Post()
  create(@Body() dto: CreateHostelRequestDto) {
    return this.hostelsService.create(dto);
  }

  @ApiOperation({ summary: 'Hostels` list' })
  @ApiOkResponse({})                                              // CHANGE
  @Get()
  findAll() {
    return this.hostelsService.findAll();
  }

  @ApiOperation({ summary: 'Hostel by id' })
  @ApiOkResponse({})                                              // CHANGE
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.hostelsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Hostel change' })
  @ApiOkResponse({})                                              // CHANGE
  @Patch(':id')
  update(
    @Param('id') id: number, 
    @Body() dto: UpdateHosteRequestDto
  ) {
    return this.hostelsService.update(id, dto);
  }

  @ApiOperation({ summary: 'Hostel removal' })
  @ApiOkResponse({})                                              // CHANGE
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.hostelsService.remove(id);
  }
}
