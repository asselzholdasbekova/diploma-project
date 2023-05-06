import { HostelDto, InfoDto, LocationDto, RestaurantDto } from "@app/server/dto";
import { PickType } from "@nestjs/swagger";

class CreateHostelLocationRequestDto extends PickType(LocationDto, [
    'id'
] as const) {}

class CreateHostelInfoRequestDto extends PickType(InfoDto, [
    'name',
    'description',
] as const) {
    readonly location: CreateHostelLocationRequestDto
}

class CreateHostelRestaurantDto extends PickType(RestaurantDto, [
    'id'
] as const) {}

export class CreateHostelRequestDto extends PickType(HostelDto, [
    'maxPrice',
    'minPrice',
    'website',
] as const) {
    readonly info: CreateHostelInfoRequestDto

    readonly restaurant: CreateHostelRestaurantDto
}
