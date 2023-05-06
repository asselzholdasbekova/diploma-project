import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePrayerRoomRequestDto } from './dto/create-prayer-room.dto';
import { UpdatePrayerRoomRequestDto } from './dto/update-prayer-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InfoEntity, PrayerRoomEntity } from '@app/server/entities';

@Injectable()
export class PrayerRoomsService {
  constructor(
    @InjectRepository(PrayerRoomEntity)
    private readonly prayerRoomsRepository: Repository<PrayerRoomEntity>,
    @InjectRepository(InfoEntity)
    private readonly infoRepository: Repository<InfoEntity>,
) {}

  async create(dto: CreatePrayerRoomRequestDto) {
    const info = await this.infoRepository.save(dto.info);
    const prayerRoom = await this.prayerRoomsRepository.save({
      ...dto, info
    });

    return prayerRoom;
  }

  findAll() {
    const prayerRooms = this.prayerRoomsRepository.find({ relations: { info: true } });

    return prayerRooms;
  }

  findOne(id: number) {
    const prayerRoom = this.prayerRoomsRepository.findOne({ where: { id }, relations: { info: true } });

    return prayerRoom;
  }

  async update(
    id: number, 
    dto: UpdatePrayerRoomRequestDto
  ) {
    const prayerRoomToUpdate = await this.findOne(id);
    if (!prayerRoomToUpdate) {
      throw new HttpException('Prayer room not found!', HttpStatus.NOT_FOUND);
    }

    const infoUpdated = (await this.infoRepository.update(prayerRoomToUpdate.info.id, dto.info)).raw[0];
    const prayerRoom = await this.prayerRoomsRepository.update(id, { ...dto, info: infoUpdated } );

    return prayerRoom;
  }

  async remove(id: number) {
    const prayerRoomToDelete = await this.findOne(id);
    if (!prayerRoomToDelete) {
      throw new HttpException('Prayer room not found!', HttpStatus.NOT_FOUND);
    }
    const prayerRoom = await this.prayerRoomsRepository.delete(id);
    const info = await this.infoRepository.delete(prayerRoomToDelete.info.id);

    return [ prayerRoom, info ];
  }
}
