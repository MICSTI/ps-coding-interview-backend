import { DanceoffDto } from './danceoff.dto';
import {
  IsArray,
  ValidateNested,
  ArrayMinSize,
  Validate,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateDanceoffsDto {
  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => DanceoffDto)
  danceoffs: DanceoffDto[];
}
