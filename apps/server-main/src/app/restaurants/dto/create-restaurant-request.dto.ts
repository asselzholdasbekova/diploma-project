import { InfoDto, LocationDto, ProductDto, RestaurantDto } from "@app/server/dto"
import { PickType } from "@nestjs/swagger"

class CreateRestaurantLocationRequestDto extends PickType(LocationDto, [
    'id'
] as const) {}

class CreateRestaurantInfoRequestDto extends PickType(InfoDto, [
    'name',
    'description',
] as const) {
    readonly location: CreateRestaurantLocationRequestDto
}

class CreateRestaurantPrayerRoomRequestDto extends PickType(LocationDto, [
    'id'
] as const) {}

export class CreateRestaurantRequestDto extends PickType(RestaurantDto, [
    'averageCheck',
    'cuisines',
    'delivery',
    'dietaryRestrictions',
    'hasParking',
    'hasWifi',
    'meals',
    'openTime',
    'payment',
    'reservation',
    'status',
    'statusReason',
    'type',
    'website'
] as const) {
    readonly info: CreateRestaurantInfoRequestDto;

    readonly prayerRoom: CreateRestaurantPrayerRoomRequestDto;
}