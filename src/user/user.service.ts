import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './dto/user.dto';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async createUser(userDto: UserDto) {
    return this.userRepository.createUser(userDto);
  }

  async getPivotData() {
    const data = await this.userRepository.getPivot();
    return data;
  }

  getHello() {
    return this.userRepository.getUserData();
  }
}
