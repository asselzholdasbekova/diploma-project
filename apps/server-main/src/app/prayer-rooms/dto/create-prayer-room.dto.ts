import { InfoDto, LocationDto, PrayerRoomDto } from "@app/server/dto"
import { PickType } from "@nestjs/swagger"

class CreatePrayerRoomLocationRequestDto extends PickType(LocationDto, [
    'id'
] as const) {}

class CreatePrayerRoomInfoRequestDto extends PickType(InfoDto, [
    'name',
    'description',
] as const) {
    readonly location: CreatePrayerRoomLocationRequestDto
}

export class CreatePrayerRoomRequestDto extends PickType(PrayerRoomDto, [
    'type'
] as const) {
    readonly info: CreatePrayerRoomInfoRequestDto
}