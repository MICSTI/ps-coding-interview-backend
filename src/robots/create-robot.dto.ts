import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsBoolean,
  IsUrl,
} from 'class-validator';

export class CreateRobotDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  powermove: string;

  @IsNotEmpty()
  @IsNumber()
  experience: number;

  @IsNotEmpty()
  @IsBoolean()
  outOfOrder: boolean;

  @IsNotEmpty()
  @IsUrl()
  avatar: string;
}
