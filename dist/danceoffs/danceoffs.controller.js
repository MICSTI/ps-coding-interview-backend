"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const danceoffs_service_1 = require("./danceoffs.service");
const danceoff_entity_1 = require("./danceoff.entity");
const robots_service_1 = require("../robots/robots.service");
const create_danceoffs_dto_1 = require("./create-danceoffs.dto");
let DanceoffsController = class DanceoffsController {
    constructor(danceoffsService, robotsService) {
        this.danceoffsService = danceoffsService;
        this.robotsService = robotsService;
    }
    async findAll() {
        return this.danceoffsService.findAll();
    }
    async create(createDanceoffsDto) {
        const result = [];
        for (const danceoffDto of createDanceoffsDto.danceoffs) {
            const newDanceoff = await this.createSingleDanceoff(danceoffDto);
            result.push(newDanceoff);
        }
        return result;
    }
    async createSingleDanceoff(createDanceoffDto) {
        const opponents = [...new Set(createDanceoffDto.opponents)];
        if (opponents.length < 2) {
            throw new common_1.BadRequestException("There must be at least two distinct robot ids present in the 'opponents' array");
        }
        const newDanceoff = new danceoff_entity_1.Danceoff();
        newDanceoff.dancedAt = new Date();
        const winnerId = createDanceoffDto.winner;
        if (!opponents.includes(winnerId)) {
            throw new common_1.BadRequestException("The winning robot must be present in the 'opponents' array");
        }
        const loserId = opponents.find(id => id !== winnerId);
        const robotIds = [winnerId, loserId];
        const participatingRobots = await this.robotsService.findByIds(robotIds);
        robotIds.forEach(robotId => {
            const robot = participatingRobots.find(robot => robot.id === robotId);
            if (!robot) {
                throw new common_1.BadRequestException(`No robot with id ${robotId} exists`);
            }
            if (robot.outOfOrder) {
                throw new common_1.BadRequestException(`The robot '${robot.name}' is out of order and cannot participate in a danceoff`);
            }
        });
        newDanceoff.loser = loserId;
        newDanceoff.winner = createDanceoffDto.winner;
        return this.danceoffsService.create(newDanceoff);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DanceoffsController.prototype, "findAll", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_danceoffs_dto_1.CreateDanceoffsDto]),
    __metadata("design:returntype", Promise)
], DanceoffsController.prototype, "create", null);
DanceoffsController = __decorate([
    common_1.Controller('danceoffs'),
    __metadata("design:paramtypes", [danceoffs_service_1.DanceoffsService,
        robots_service_1.RobotsService])
], DanceoffsController);
exports.DanceoffsController = DanceoffsController;
//# sourceMappingURL=danceoffs.controller.js.map