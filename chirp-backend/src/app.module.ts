import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ChirrupModule } from './chirrup/chirrup.module';

@Module({
  // The forRoot() method accepts the same configuration object as mongoose.connect() from the Mongoose package
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/chirrup'), ChirrupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
