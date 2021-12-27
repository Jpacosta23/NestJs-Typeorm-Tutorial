import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotosMetadataController } from './photos-meta.controller';
import { PhotosMetadataService } from './photos-meta.service';
import { PhotosMetadataRepository } from './repository/photos-meta.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PhotosMetadataRepository])],
  controllers: [PhotosMetadataController],
  providers: [PhotosMetadataService],
})
export class PhotosMetadataModule {}
