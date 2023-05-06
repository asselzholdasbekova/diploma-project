import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateLocationRequestDto } from './dto/update-location-request.dto';
import { CreateLocationRequestDto } from './dto/create-location-request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LocationEntity } from '@app/server/entities';
import { Repository } from 'typeorm';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(LocationEntity) 
    private readonly locationsRepository: Repository<LocationEntity>,
  ) {}

  async create(dto: CreateLocationRequestDto) {
    const location = await this.locationsRepository.save(dto);

    return location;
  }

  findAll() {
    const locations = this.locationsRepository.find();

    return locations;
  }

  findOne(id: number) {
    const location = this.locationsRepository.findOne({ where: { id } });

    return location;
  }

  async update(
    id: number, 
    dto: UpdateLocationRequestDto
  ) {
    const locationToUpdate = await this.findOne(id);
    if (!locationToUpdate) {
      throw new HttpException('Location not found!', HttpStatus.NOT_FOUND);
    }
    const location = await this.locationsRepository.update(id, dto);

    return location;
  }

  async remove(id: number) {
    const locationToDelete = await this.findOne(id);
    if (!locationToDelete) {
      throw new HttpException('Location not found!', HttpStatus.NOT_FOUND);
    }

    return this.locationsRepository.delete(id);;
  }
}
