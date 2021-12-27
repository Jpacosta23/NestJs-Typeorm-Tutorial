import { Controller, Get } from '@nestjs/common';
import { PhotosMetadataService } from './photos-meta.service';

@Controller()
export class PhotosMetadataController {
  constructor(private readonly photosMetadataService: PhotosMetadataService) {}

  @Get()
  getHello(): string {
    return this.photosMetadataService.getHello();
  }
}
