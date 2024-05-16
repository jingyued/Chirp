import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChirrupModule } from './chirrup/chirrup.module';
import { MongooseModule } from '@nestjs/mongoose';
//for setup env file variables
//env is in gitignore
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({

  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get("Mongodb_PATH")
      }),
      inject: [ConfigService]
    }),

    ChirrupModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule { }
