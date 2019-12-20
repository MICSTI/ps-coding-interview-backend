import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as PostgressConnectionStringParser from 'pg-connection-string';

export class ConfigService {
  private readonly envConfig: Record<string, string>;

  constructor(filePath: string) {
    this.envConfig = dotenv.parse(fs.readFileSync(filePath));

    this.envConfig['NODE_ENV'] = process.env.NODE_ENV;

    const databaseUrl: string = process.env.DATABASE_URL;
    const connectionOptions = PostgressConnectionStringParser.parse(
      databaseUrl
    );

    this.envConfig['DB_HOST'] = connectionOptions.host;
    this.envConfig['DB_PORT'] = connectionOptions.port;
    this.envConfig['DB_USER'] = connectionOptions.user;
    this.envConfig['DB_PASSWORD'] = connectionOptions.password;
    this.envConfig['DB_DATABASE'] = connectionOptions.database;
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
