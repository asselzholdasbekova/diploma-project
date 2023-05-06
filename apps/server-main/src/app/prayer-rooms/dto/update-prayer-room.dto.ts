import { PartialType } from '@nestjs/mapped-types';
import { CreatePrayerRoomRequestDto } from './create-prayer-room.dto';

export class UpdatePrayerRoomRequestDto extends PartialType(CreatePrayerRoomRequestDto) {}
