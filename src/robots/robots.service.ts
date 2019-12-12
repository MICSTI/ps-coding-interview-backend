import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Robot } from './robot.entity';

@Injectable()
export class RobotsService {
  constructor(
    @InjectRepository(Robot)
    private readonly robotsRepository: Repository<Robot>,
  ) {}

  async create(robot: Robot): Promise<Robot> {
    return this.robotsRepository.save(robot);
  }

  async findAll(): Promise<Robot[]> {
    return this.robotsRepository.find();
  }

  async findOne(id: number): Promise<Robot> {
    return this.robotsRepository.findOne(id);
  }
}
