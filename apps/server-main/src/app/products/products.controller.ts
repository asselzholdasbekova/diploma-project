import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductRequestDto } from './dto/create-product-request.dto';
import { UpdateProductRequestDto } from './dto/update-product-request.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ summary: 'Product creation' })
  @ApiOkResponse({})                                              // CHANGE
  @Post()
  create(@Body() dto: CreateProductRequestDto) {
    return this.productsService.create(dto);
  }

  @ApiOperation({ summary: 'Products` change' })
  @ApiOkResponse({})                                              // CHANGE
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @ApiOperation({ summary: 'Product id' })
  @ApiOkResponse({})                                              // CHANGE
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Product change' })
  @ApiOkResponse({})                                              // CHANGE
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProductRequestDto) {
    return this.productsService.update(+id, dto);
  }

  @ApiOperation({ summary: 'Product removal' })
  @ApiOkResponse({})                                              // CHANGE
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
