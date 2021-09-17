import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './entity/department.entity';
import { UserService } from '../users/user.service';
import { User } from '../users/entity/user.entity';
import { LocationService } from '../location/location.service';
import { Location } from '../location/entity/location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Department, User, Location])],
  controllers: [DepartmentController],
  providers: [DepartmentService, UserService, LocationService],
})
export class DepartmentModule {}
