import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/decorator/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { NoAuth } from '../auth/guards/no-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';

@ApiTags('User')
@ApiBearerAuth()
@Controller('api/users')
export class UserController {
  constructor(private readonly usersService: UserService) {}
  
  @NoAuth()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto)
    return this.usersService.create(createUserDto);
  }

  @Roles('vendor')
  @UseGuards(RolesGuard)
  @Get(':id')
 async show(@Param('id') id: string) {
    return await this.usersService.showById(+id);
  }
}
