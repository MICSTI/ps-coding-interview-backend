import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  ArrayMinSize,
  ArrayMaxSize,
} from 'class-validator';

export class DanceoffDto {
  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  opponents: number[];

  @IsNotEmpty()
  @IsNumber()
  winner: number;
}
