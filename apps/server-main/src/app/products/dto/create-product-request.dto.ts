import { InfoDto, LocationDto, ProductDto } from "@app/server/dto"
import { PickType } from "@nestjs/swagger"

class CreateProductLocationRequestDto extends PickType(LocationDto, [
    'id'
] as const) {}

class CreateProductInfoRequestDto extends PickType(InfoDto, [
    'name',
    'description',
] as const) {
    readonly location: CreateProductLocationRequestDto
}

export class CreateProductRequestDto extends PickType(ProductDto, [
    'company',
    'ingredients',
    'status',
    'statusReason',
    'website'
] as const) {
    readonly info: CreateProductInfoRequestDto
}