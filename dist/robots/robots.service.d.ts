import { Repository } from 'typeorm';
import { Robot } from './robot.entity';
export declare class RobotsService {
    private readonly robotsRepository;
    constructor(robotsRepository: Repository<Robot>);
    create(robot: Robot): Promise<Robot>;
    findAll(): Promise<Robot[]>;
    findOne(id: number): Promise<Robot>;
    findByIds(ids: number[]): Promise<Robot[]>;
}
