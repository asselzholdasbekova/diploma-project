import { PartialType } from '@nestjs/mapped-types';
import { CreateHostelRequestDto } from './create-hostel-request.dto';

export class UpdateHosteRequestDto extends PartialType(CreateHostelRequestDto) {}
