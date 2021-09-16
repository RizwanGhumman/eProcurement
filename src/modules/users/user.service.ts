import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './entity/user.entity';
import { UserRole } from './enum/user-role.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = User.create(createUserDto);
    await user.save();
    return user;
  }

  async showById(id: number): Promise<User> {
    const user = await this.userRepo.findOne(id);
    if(!user){
      throw new UnauthorizedException(`User with ${id} is not found`);
    }
    return user;
  } 

  async findByEmail(email: string) {
    return await User.findOne({
      where: {
        email: email,
      },
    });
  }
}
