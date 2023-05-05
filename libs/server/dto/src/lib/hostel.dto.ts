import { HostelEntity } from "@app/server/entities";
import { BaseDto } from "./base.dto";
import { InfoDto } from "./info.dto";
import { IsBoolean, IsNumber, IsString } from "class-validator";
import { RestaurantDto } from "./restaurant.dto";

export class HostelDto extends BaseDto implements HostelEntity {
    readonly info: InfoDto;

    @IsBoolean()
    readonly hasRestaurant: boolean;

    readonly restaurant: RestaurantDto;

    @IsString()
    readonly website: string;

    @IsNumber()
    readonly minPrice: number;

    @IsNumber()
    readonly maxPrice: number;
}