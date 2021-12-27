import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Photo } from './photos.entity';

@Entity()
export class PhotoMetadata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  height: number;

  @Column('int')
  width: number;

  @Column()
  orientation: string;

  @Column()
  compressed: boolean;

  @Column()
  comment: string;

  @Column()
  photo_id: number;

  @OneToOne((type) => Photo, (photo) => photo.metadata)
  @JoinColumn({ name: 'photo_id', referencedColumnName: 'id' })
  photo: Photo;
}
