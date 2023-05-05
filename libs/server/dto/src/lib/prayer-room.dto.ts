import { PrayerRoomEntity, PrayerRoomType } from "@app/server/entities";
import { BaseDto } from "./base.dto";
import { InfoDto } from "./info.dto";
import { IsEnum } from "class-validator";

export class PrayerRoomDto extends BaseDto implements PrayerRoomEntity {
    readonly info: InfoDto;

    @IsEnum(PrayerRoomType)
    readonly type: PrayerRoomType;
}