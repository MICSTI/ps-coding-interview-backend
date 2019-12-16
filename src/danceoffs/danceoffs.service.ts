import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions } from 'typeorm';
import { Danceoff } from './danceoff.entity';

@Injectable()
export class DanceoffsService {
  constructor(
    @InjectRepository(Danceoff)
    private readonly danceoffsRepository: Repository<Danceoff>
  ) {}

  async findAll(): Promise<Danceoff[]> {
    // returns the latest 100 danceoffs
    return this.danceoffsRepository.find({
      order: { dancedAt: 'DESC' },
      take: 100,
    });
  }

  async create(danceoff: Danceoff): Promise<Danceoff> {
    return this.danceoffsRepository.save(danceoff);
  }
}
