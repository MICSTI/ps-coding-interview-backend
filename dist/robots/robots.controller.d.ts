import { Robot } from './robot.entity';
import { RobotsService } from './robots.service';
export declare class RobotsController {
    private readonly robotsService;
    constructor(robotsService: RobotsService);
    findAll(): Promise<Robot[]>;
    findOne(params: any): Promise<Robot>;
}
