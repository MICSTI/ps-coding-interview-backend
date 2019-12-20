"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_service_1 = require("./shared/config/config.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    const configService = app.get(config_service_1.ConfigService);
    const apiBasePath = configService.get('API_BASE_PATH');
    if (!apiBasePath) {
        throw new common_1.InternalServerErrorException(`environment variable API_BASE_PATH could not be resolved`);
    }
    app.setGlobalPrefix(apiBasePath);
    const port = process.env.PORT || 3000;
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map