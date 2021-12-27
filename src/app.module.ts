import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PhotosModule } from './photos/photos.module';
import { PhotosMetadataModule } from './photos-meta/photos-meta.module';
import '../env';

let typeOrmConfig = {};

typeOrmConfig = require('./config/typeorm.config');

@Module({
  imports: [
    UserModule,
    PhotosModule,
    PhotosMetadataModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot({
      envFilePath: '../.env',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
