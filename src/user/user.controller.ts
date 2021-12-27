import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  private logger = new Logger('UserController');
  @Get()
  getHello() {
    return this.userService.getHello();
  }

  @Get('pivot')
  getUserPivotData() {
    return this.userService.getPivotData();
  }

  @Post()
  createUser(@Body() userDto: UserDto) {
    this.logger.log('creating user...');
    return this.userService.createUser(userDto);
  }
}
