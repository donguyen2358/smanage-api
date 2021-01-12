import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { use } from 'passport';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { User } from './entity/user.entity';
/* eslint-disable */
const bcrypt = require('bcrypt');

@Injectable()
export class UserService {
  private readonly users: User[];

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async find(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findById(id: string): Promise<User> {
    return this.userRepository.findOne({
      id: id,
    });
  }

  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({
      email: email,
    });
  }

  async create(createUserDto: CreateUserDTO): Promise<User> {
    return;
  }

  async update(id: string, updateUserDto: UpdateUserDTO): Promise<User> {
    const user = await this.userRepository.findOne(id);
    user.name = updateUserDto.name;
    return this.userRepository.save(user);
  }

  async delete(id: string) {
    this.userRepository.softDelete(id);

    return this.userRepository.findOne(id, {
      withDeleted: true,
    });
  }

  async hashPassword(plainPassword: string) {
    return bcrypt.hash(plainPassword, 10);
  }

  async compareHashedPassword(plain: string, hashed: string) {
    return bcrypt.compare(plain, hashed);
  }

  async generatePassword(id: string): Promise<string> {
    const generatedPassword = this.getRandomInt();
    const user = await this.userRepository.findOneOrFail(id);
    user.password = String(generatedPassword);
    await this.userRepository.save(user);
    return user.password;
  }

  getRandomInt(max: number = 9999) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
