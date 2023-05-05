import { RestaurantCuisine, RestaurantDietaryRestriction, RestaurantEntity, RestaurantMeal, RestaurantPayment, RestaurantStatus, RestaurantType } from "@app/server/entities";
import { BaseDto } from "./base.dto";
import { InfoDto } from "./info.dto";
import { IsArray, IsBoolean, IsEnum, IsNumber, IsString } from "class-validator";
import { PrayerRoomDto } from "./prayer-room.dto";

export class RestaurantDto extends BaseDto implements RestaurantEntity {
    readonly info: InfoDto;

    @IsString()
    readonly opentTime: string;

    @IsNumber()
    readonly averageCheck: number;

    @IsEnum(RestaurantType)
    readonly type: RestaurantType;

    @IsEnum(RestaurantMeal, { each: true })
    readonly meals: RestaurantMeal[];

    @IsEnum(RestaurantCuisine, { each: true })
    readonly cuisines: RestaurantCuisine[];

    @IsEnum(RestaurantDietaryRestriction, { each: true })
    readonly dietaryRestrictions: RestaurantDietaryRestriction[]

    @IsString()
    readonly reservation: string;

    @IsString()
    readonly delivery: string;

    @IsEnum(RestaurantPayment, { each: true })
    readonly payment: RestaurantPayment[];

    @IsBoolean()
    readonly hasWifi: boolean;

    @IsBoolean()
    readonly hasParking: boolean;

    @IsBoolean()
    readonly hasPrayerRoom: boolean;

    readonly prayerRoom: PrayerRoomDto;

    @IsEnum(RestaurantStatus)
    readonly status: RestaurantStatus;

    @IsString()
    readonly statusReason: string;

    @IsString()
    readonly website: string;
}