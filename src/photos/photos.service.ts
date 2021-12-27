import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotosDto } from './dto/photos.dto';
import { PhotosRepository } from './repository/photos.repository';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(PhotosRepository)
    private photosRepository: PhotosRepository,
  ) {}

  getHello() {
    return this.photosRepository.find();
  }

  async createPhoto(photosDto: PhotosDto) {
    return await this.photosRepository.save(photosDto);
  }
}
