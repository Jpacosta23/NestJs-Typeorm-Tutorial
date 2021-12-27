import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotosMetadataRepository } from './repository/photos-meta.repository';

@Injectable()
export class PhotosMetadataService {
  constructor(
    @InjectRepository(PhotosMetadataRepository)
    private photoMetadataRepository: PhotosMetadataRepository,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
}
