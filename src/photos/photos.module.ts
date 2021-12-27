import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';
import { PhotosRepository } from './repository/photos.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PhotosRepository])],
  controllers: [PhotosController],
  providers: [PhotosService],
})
export class PhotosModule {}
