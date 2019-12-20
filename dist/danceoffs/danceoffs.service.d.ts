import { Repository } from 'typeorm';
import { Danceoff } from './danceoff.entity';
export declare class DanceoffsService {
    private readonly danceoffsRepository;
    constructor(danceoffsRepository: Repository<Danceoff>);
    findAll(): Promise<Danceoff[]>;
    create(danceoff: Danceoff): Promise<Danceoff>;
    createMany(danceoffs: Danceoff[]): Promise<Danceoff[]>;
}
