import { Controller, Get, Param } from '@nestjs/common';

@Controller('robots')
export class RobotsController {
  @Get()
  async findAll(): Promise<string> {
    return 'will return all robots';
  }

  @Get(':id')
  async findOne(@Param() params): Promise<string> {
    console.log(`get robot ${params.id}`);
    return `will return robot with id ${params.id}`;
  }
}
