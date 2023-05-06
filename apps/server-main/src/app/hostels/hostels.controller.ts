import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HostelsService } from './hostels.service';
import { CreateHostelRequestDto } from './dto/create-hostel-request.dto';
import { UpdateHosteRequestDto } from './dto/update-hostel-request.dto';

@Controller('hostels')
export class HostelsController {
  constructor(private readonly hostelsService: HostelsService) {}

  @Post()
  create(@Body() dto: CreateHostelRequestDto) {
    return this.hostelsService.create(dto);
  }

  @Get()
  findAll() {
    return this.hostelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.hostelsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number, 
    @Body() dto: UpdateHosteRequestDto
  ) {
    return this.hostelsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.hostelsService.remove(id);
  }
}
