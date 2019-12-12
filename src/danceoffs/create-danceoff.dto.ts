import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  ArrayContains,
  ArrayMinSize,
  ArrayMaxSize,
} from 'class-validator';

export class CreateDanceoffDto {
  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  opponents: number[];

  @IsNotEmpty()
  @IsNumber()
  winner: number;
}
