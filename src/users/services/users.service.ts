import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersTable } from '../entities/users.entity';

@Injectable()
export class UsersService {
  @InjectRepository(UsersTable)
  private readonly userRepo: Repository<UsersTable>;

  findAll(): Promise<UsersTable[]> {
    return this.userRepo.find();
  }

  findOne(id: any): Promise<UsersTable> {
    return this.userRepo.findOne(id);
  }

  createUser(body: any) {
    const newUser = this.userRepo.create(body);
    return this.userRepo.save(newUser);
  }

  async updateUser(id: any, body: any) {
    const user = await this.userRepo.findOne(id);
    return this.userRepo.merge(user, body);
  }

  async delete(id: any) {
    await this.userRepo.delete(id);
    return true;
  }
}
