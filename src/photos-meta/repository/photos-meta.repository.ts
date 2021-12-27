import { PhotoMetadata } from '../../entities/photoMetadata.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(PhotoMetadata)
export class PhotosMetadataRepository extends Repository<PhotoMetadata> {}
