import { DanceoffsService } from './danceoffs.service';
import { Danceoff } from './danceoff.entity';
import { RobotsService } from 'src/robots/robots.service';
import { CreateDanceoffsDto } from './create-danceoffs.dto';
export declare class DanceoffsController {
    private readonly danceoffsService;
    private readonly robotsService;
    constructor(danceoffsService: DanceoffsService, robotsService: RobotsService);
    findAll(): Promise<Danceoff[]>;
    create(createDanceoffsDto: CreateDanceoffsDto): Promise<Danceoff[]>;
    private createSingleDanceoff;
}
