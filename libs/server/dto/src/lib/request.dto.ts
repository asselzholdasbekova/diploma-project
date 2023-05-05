import { RequestEntity, RequestStatus } from "@app/server/entities";
import { BaseDto } from "./base.dto";
import { IsEmail, IsEnum, IsString } from "class-validator";
import { InfoDto } from "./info.dto";

export class RequestDto extends BaseDto implements RequestEntity {
    @IsString()
    readonly name: string;

    @IsEmail()
    readonly email: string;

    readonly info: InfoDto;

    @IsEnum(RequestStatus)
    readonly status: RequestStatus

    @IsString()
    readonly statusReason: string
}