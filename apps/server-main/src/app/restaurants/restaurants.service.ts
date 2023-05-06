import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRestaurantRequestDto } from './dto/create-restaurant-request.dto';
import { UpdateRestaurantRequestDto } from './dto/update-restaurant-request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { InfoEntity, RestaurantEntity } from '@app/server/entities';
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(RestaurantEntity)
    private readonly restaurantsRepository: Repository<RestaurantEntity>,
    @InjectRepository(InfoEntity)
    private readonly infoRepository: Repository<InfoEntity>,
  ) {}

  async create(dto: CreateRestaurantRequestDto) {
    const info = await this.infoRepository.save(dto.info);
    const restaurant = await this.restaurantsRepository.save({
      ...dto, info
    });

    return restaurant;
  }

  findAll() {
    const restaurants = this.restaurantsRepository.find({ relations: { info: true, prayerRoom: true } });

    return restaurants;
  }

  findOne(id: number) {
    const restaurant = this.restaurantsRepository.findOne({ where: { id }, relations: { info: true, prayerRoom: true } });

    return restaurant;
  }

  async update(
    id: number, 
    dto: UpdateRestaurantRequestDto
  ) {
    const restaurantToUpdate = await this.findOne(id);
    if (!restaurantToUpdate) {
      throw new HttpException('Restaurant not found!', HttpStatus.NOT_FOUND);
    }

    const infoUpdated = (await this.infoRepository.update(restaurantToUpdate.info.id, dto.info)).raw[0];
    const restaurant = await this.restaurantsRepository.update(id, { ...dto, info: infoUpdated } );

    return restaurant;
  }

  async remove(id: number) {
    const restaurantToDelete = await this.findOne(id);
    if (!restaurantToDelete) {
      throw new HttpException('Restaurant not found!', HttpStatus.NOT_FOUND);
    }
    const restaurant = await this.restaurantsRepository.delete(id);
    const info = await this.infoRepository.delete(restaurantToDelete.info.id);

    return [ restaurant, info ];
  }
}
