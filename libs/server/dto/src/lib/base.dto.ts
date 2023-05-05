import BaseEntity from "@app/server/entities/lib/base.entity";
import { IsDate, IsNumber, IsOptional } from "class-validator";

export class BaseDto implements BaseEntity {
  @IsNumber()
  readonly id: number;

  @IsOptional()
  @IsDate()
  readonly createdAt?: Date;

  @IsOptional()
  @IsDate()
  readonly updatedAt?: Date;
}
  