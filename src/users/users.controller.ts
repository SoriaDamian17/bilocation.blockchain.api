import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserDTO } from './dto/create-user.dto';
import { UsersService } from './services/users.service';

@Controller('api/v1/users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.findAll();
  }

  @Get(':userId')
  getUser(@Param('userId') userId: string) {
    return this.userService.findOne(parseInt(userId));
  }

  @Post()
  createUser(@Body() body: UserDTO) {
    return this.userService.createUser(body);
  }

  @Put(':userId')
  updateUser(@Body() body: UserDTO, @Param('userId') userId) {
    return this.userService.updateUser(userId, body);
  }

  @Delete(':userId')
  deleteUser(@Param('userId') userId) {
    return this.userService.delete(userId);
  }
}
