import { User } from '../../entities/user.entity';
import { EntityRepository, getManager, Repository } from 'typeorm';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { Photo } from 'src/entities/photos.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  private entityManager = getManager();
  private logger = new Logger('UserRepository');

  async getUserData() {
    const query = this.createQueryBuilder('user');
    try {
      return await query.getMany();
    } catch (error) {
      this.logger.error(`Failed to get user data`, error.stack);
      throw new InternalServerErrorException();
    }
  }

  async getPivot() {
    const photoQuery = this.entityManager
      .getRepository('photo')
      .createQueryBuilder('photo')
      .select(['photo.id', 'photo.name']);

    const query = this.createQueryBuilder('user')
      .select([
        'user.id',
        'user.firstName',
        'photo.id',
        'photo.name',
        'photo.description',
      ])
      .leftJoin('user.photos', 'photo');

    const testQuery = this.createQueryBuilder('user')
      .select(['user.id', 'user.firstName'])
      .leftJoinAndSelect(
        (qb) =>
          qb
            .select([
              'p.user_id as user_id',
              'p.id as photo_id',
              'p.name as name',
              'p.description as description',
            ])
            .from(Photo, 'p'),
        'photos',
        'photos.user_id = user.id', // the answer
      )
      .where('user.firstName = :firstName', { firstName: 'Timber' })
      .groupBy(
        'user.id, photos.user_id, photos.photo_id, photos.name, photos.description',
      );

    try {
      return query.getMany();
    } catch (error) {
      this.logger.error(`Failed to get user data`, error.stack);
      throw new InternalServerErrorException();
    }
  }

  async createUser(userData: UserDto) {
    try {
      console.log(userData, 'Userdata');
      return await this.entityManager.getRepository('user').save(userData);
    } catch (error) {
      this.logger.error(`Failed to create user data`, error.stack);
      throw new InternalServerErrorException();
    }
  }
}
