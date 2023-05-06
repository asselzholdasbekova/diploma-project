import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantRequestDto } from './dto/create-restaurant-request.dto';
import { UpdateRestaurantRequestDto } from './dto/update-restaurant-request.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('restaurants')
@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @ApiOperation({ summary: 'Restaurant creation' })
  @ApiOkResponse({})                                              // CHANGE
  @Post()
  create(@Body() dto: CreateRestaurantRequestDto) {
    return this.restaurantsService.create(dto);
  }

  @ApiOperation({ summary: 'Restaurants` list' })
  @ApiOkResponse({})                                              // CHANGE
  @Get()
  findAll() {
    return this.restaurantsService.findAll();
  }

  @ApiOperation({ summary: 'Restaurant by id' })
  @ApiOkResponse({})                                              // CHANGE
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restaurantsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Restaurant change' })
  @ApiOkResponse({})                                              // CHANGE
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateRestaurantRequestDto) {
    return this.restaurantsService.update(+id, dto);
  }

  @ApiOperation({ summary: 'Restaurant removal' })
  @ApiOkResponse({})                                              // CHANGE
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restaurantsService.remove(+id);
  }
}
