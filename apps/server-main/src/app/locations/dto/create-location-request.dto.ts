import { LocationDto } from "@app/server/dto";
import { PickType } from "@nestjs/swagger";

export class CreateLocationRequestDto extends PickType(LocationDto, [
    'country',
    'city',
    'address'
] as const) {}
