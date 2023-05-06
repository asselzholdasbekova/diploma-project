import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateHostelRequestDto } from './dto/create-hostel-request.dto';
import { UpdateHosteRequestDto } from './dto/update-hostel-request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HostelEntity, InfoEntity } from '@app/server/entities';
import { Repository } from 'typeorm';

@Injectable()
export class HostelsService {
  constructor(
    @InjectRepository(HostelEntity)
    private readonly hostelsRepository: Repository<HostelEntity>,
    @InjectRepository(InfoEntity)
    private readonly infoRepository: Repository<InfoEntity>,
  ) {}

  async create(dto: CreateHostelRequestDto) {
    const info = await this.infoRepository.save(dto.info);
    const hostel = await this.hostelsRepository.save({
      ...dto, info
    });

    return hostel;
  }

  findAll() {
    const hostels = this.hostelsRepository.find({ relations: { info: true, restaurant: true } });

    return hostels;
  }

  findOne(id: number) {
    const hostel = this.hostelsRepository.findOne({ where: { id }, relations: { info: true, restaurant: true } });

    return hostel;
  }

  async update(
    id: number, 
    dto: UpdateHosteRequestDto
  ) {
    const hostelToUpdate = await this.findOne(id);
    if (!hostelToUpdate) {
      throw new HttpException('Hostel not found!', HttpStatus.NOT_FOUND);
    }

    const infoUpdated = (await this.infoRepository.update(hostelToUpdate.info.id, dto.info)).raw[0];
    const hostel = await this.hostelsRepository.update(id, { ...dto, info: infoUpdated } );

    return hostel;
  }

  async remove(id: number) {
    const hostelToDelete = await this.findOne(id);
    if (!hostelToDelete) {
      throw new HttpException('Hostel not found!', HttpStatus.NOT_FOUND);
    }
    const hostel = await this.hostelsRepository.delete(id);
    const info = await this.infoRepository.delete(hostelToDelete.info.id);

    return [ hostel, info ];
  }
}
