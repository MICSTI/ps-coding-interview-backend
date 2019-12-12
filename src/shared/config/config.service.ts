import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
  private readonly envConfig: Record<string, string>;

  constructor(filePath: string) {
    this.envConfig = dotenv.parse(fs.readFileSync(filePath));

    this.envConfig['NODE_ENV'] = process.env.NODE_ENV;
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
