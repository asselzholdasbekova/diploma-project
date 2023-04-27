import { PartialType } from '@nestjs/mapped-types';
import { CreatePrayerRoomDto } from './create-prayer-room.dto';

export class UpdatePrayerRoomDto extends PartialType(CreatePrayerRoomDto) {}
