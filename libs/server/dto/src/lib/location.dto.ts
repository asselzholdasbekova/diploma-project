import { LocationEntity } from "@app/server/entities";
import { BaseDto } from "./base.dto";
import { IsString } from "class-validator";

export class LocationDto extends BaseDto implements LocationEntity {
    @IsString()
    readonly country: string;

    @IsString()
    readonly city: string

    @IsString()
    readonly address: string
}