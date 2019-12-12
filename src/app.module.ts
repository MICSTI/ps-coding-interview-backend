import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Robot } from './robots/robot.entity';
import { Danceoff } from './danceoffs/danceoff.entity';
import { RobotModule } from './robots/robots.module';
import { DanceoffModule } from './danceoffs/danceoffs.module';
import { ConfigService } from './shared/config/config.service';
import { ConfigModule } from './shared/config/config.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService): {} => ({
        type: configService.get('DB_TYPE'),
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [Robot, Danceoff],
        synchronize: configService.get('NODE_ENV') !== 'production',
      }),
      inject: [ConfigService],
    }),
    RobotModule,
    DanceoffModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
