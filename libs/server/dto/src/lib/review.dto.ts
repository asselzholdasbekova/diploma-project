import { ReviewEntity, ReviewEvaluation } from "@app/server/entities";
import { BaseDto } from "./base.dto";
import { IsDate, IsEnum, IsString } from "class-validator";
import { InfoDto } from "./info.dto";

export class ReviewDto extends BaseDto implements ReviewEntity {
    @IsString()
    readonly name: string;

    @IsEnum(ReviewEvaluation)
    readonly evaluation: ReviewEvaluation;

    @IsDate()
    readonly dateOfVisit: Date

    @IsString()
    readonly comment: string;

    readonly info: InfoDto;
}