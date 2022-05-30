import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(): string {
    return 'Hello User';
  }

  @Post()
  createUser(@Body() user): string {
    console.log(user);
    return 'New User';
  }

  @Put()
  updateUser(): string {
    return 'Update User';
  }

  @Delete()
  deleteUser(): string {
    return 'Remove User';
  }
}
