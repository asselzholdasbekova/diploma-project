import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductRequestDto } from './dto/create-product-request.dto';
import { UpdateProductRequestDto } from './dto/update-product-request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { InfoEntity, ProductEntity } from '@app/server/entities';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productsRepository: Repository<ProductEntity>,
    @InjectRepository(InfoEntity)
    private readonly infoRepository: Repository<InfoEntity>,
  ) {}

  async create(dto: CreateProductRequestDto) {
    const info = await this.infoRepository.save(dto.info);
    const product = await this.productsRepository.save({
      ...dto, info
    });

    return product;
  }

  findAll() {
    const products = this.productsRepository.find({ relations: { info: true } });

    return products;
  }

  findOne(id: number) {
    const product = this.productsRepository.findOne({where: { id }, relations: { info: true } });

    return product;
  }

  async update(
    id: number, 
    dto: UpdateProductRequestDto
  ) {
    const productToUpdate = await this.findOne(id);
    if (!productToUpdate) {
      throw new HttpException('Product not found!', HttpStatus.NOT_FOUND);
    }

    const infoUpdated = (await this.infoRepository.update(productToUpdate.info.id, dto.info)).raw[0];
    const product = await this.productsRepository.update(id, { ...dto, info: infoUpdated } );

    return product;
  }

  async remove(id: number) {
    const productToDelete = await this.findOne(id);
    if (!productToDelete) {
      throw new HttpException('Product not found!', HttpStatus.NOT_FOUND);
    }
    const product = await this.productsRepository.delete(id);
    const info = await this.infoRepository.delete(productToDelete.info.id);

    return [ product, info ];
  }
}
