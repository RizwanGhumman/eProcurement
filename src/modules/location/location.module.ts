import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './entity/location.entity';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UserService } from '../users/user.service';
import { User } from '../users/entity/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Location,User])],
  controllers: [LocationController],
  providers: [LocationService,RolesGuard,UserService],
})
export class LocationModule {}
