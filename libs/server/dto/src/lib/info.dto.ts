import { InfoEntity } from "@app/server/entities";
import { BaseDto } from "./base.dto";
import { IsNumber, IsString } from "class-validator";
import { LocationDto } from "./location.dto";
import { ReviewDto } from "./review.dto";

export class InfoDto extends BaseDto implements InfoEntity {
    @IsString()
    readonly name: string;

    @IsString()
    readonly description: string;

    readonly location: LocationDto;

    readonly reviews: ReviewDto[];

    @IsNumber()
    readonly rating: number;
}