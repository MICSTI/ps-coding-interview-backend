import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateDanceoffDto } from './create-danceoff.dto';

@Controller('danceoffs')
export class DanceoffsController {
  @Get()
  async findAll(): Promise<string> {
    return 'will return all danceoffs';
  }

  @Post()
  async create(@Body() createDanceoffDto: CreateDanceoffDto): Promise<string> {
    return 'will return the created danceoff object';
  }
}
