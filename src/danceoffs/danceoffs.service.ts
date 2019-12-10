import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult } from 'typeorm';
import { Danceoff } from './danceoff.entity';
import { CreateDanceoffDto } from './create-danceoff.dto';

@Injectable()
export class DanceoffsService {
  constructor(
    @InjectRepository(Danceoff)
    private readonly danceoffsRepository: Repository<Danceoff>,
  ) {}

  async findAll(): Promise<Danceoff[]> {
    return this.danceoffsRepository.find();
  }

  async create(danceoff: Danceoff): Promise<InsertResult> {
    return this.danceoffsRepository.insert(danceoff);
  }
}
