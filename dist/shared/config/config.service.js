"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const fs = require("fs");
const PostgressConnectionStringParser = require("pg-connection-string");
class ConfigService {
    constructor(filePath) {
        this.envConfig = dotenv.parse(fs.readFileSync(filePath));
        this.envConfig['NODE_ENV'] = process.env.NODE_ENV;
        const databaseUrl = process.env.DATABASE_URL;
        const connectionOptions = PostgressConnectionStringParser.parse(databaseUrl);
        this.envConfig['DB_HOST'] = connectionOptions.host;
        this.envConfig['DB_PORT'] = connectionOptions.port;
        this.envConfig['DB_USER'] = connectionOptions.user;
        this.envConfig['DB_PASSWORD'] = connectionOptions.password;
        this.envConfig['DB_DATABASE'] = connectionOptions.database;
    }
    get(key) {
        return this.envConfig[key];
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map