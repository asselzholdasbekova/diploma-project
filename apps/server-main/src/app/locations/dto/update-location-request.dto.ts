import { PartialType } from '@nestjs/swagger';
import { CreateLocationRequestDto } from './create-location-request.dto';

export class UpdateLocationRequestDto extends PartialType(CreateLocationRequestDto) {}
