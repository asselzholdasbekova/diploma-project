import { ProductEntity, ProductStatus } from "@app/server/entities";
import { BaseDto } from "./base.dto";
import { InfoDto } from "./info.dto";
import { IsArray, IsEnum, IsString } from "class-validator";

export class ProductDto extends BaseDto implements ProductEntity {
    readonly info: InfoDto;

    @IsString()
    readonly company: string;

    @IsArray()
    readonly ingredients: string[];

    @IsEnum(ProductStatus)
    readonly status: ProductStatus;

    @IsString()
    readonly statusReason: string;

    @IsString()
    readonly website: string;
}