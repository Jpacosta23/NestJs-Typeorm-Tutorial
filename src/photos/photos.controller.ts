import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { PhotosDto } from './dto/photos.dto';
import { PhotosService } from './photos.service';

@Controller('photo')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}
  private logger = new Logger('UserController');
  @Get()
  getHello() {
    return this.photosService.getHello();
  }

  @Post()
  createPhoto(@Body() photosDto: PhotosDto) {
    this.logger.log('creating photo...');
    return this.photosService.createPhoto(photosDto);
  }
}
