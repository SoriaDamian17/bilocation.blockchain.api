import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersTable } from './entities/users.entity';
import { UsersController } from './users.controller';
import { UsersService } from './services/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersTable])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
