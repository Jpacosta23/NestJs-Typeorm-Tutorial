import { Photo } from '../../entities/photos.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Photo)
export class PhotosRepository extends Repository<Photo> {}
