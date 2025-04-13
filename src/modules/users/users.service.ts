import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async createUser(user: {
    fullName: string;
    email: string;
    password: string;
  }) {
    const newUser = this.usersRepository.create(user);
    return await this.usersRepository.save(newUser);
  }

  async getUserByEmail(email: string) {
    return await this.usersRepository.findOneOrFail({
      where: {
        email: email,
      },
    });
  }
}
