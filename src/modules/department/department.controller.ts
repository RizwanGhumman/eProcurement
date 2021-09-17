import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/decorator/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { NoAuth } from '../auth/guards/no-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UserRole } from '../users/enum/user-role.entity';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entity/department.entity';

@ApiBearerAuth()
@ApiTags('Departments')
@Controller('api/departments')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Roles(UserRole.ADMIN)
  //@UseGuards(JwtAuthGuard,RolesGuard)
  @Get('/:take/:skip')
  getDepartments(
    @Param('take') take: number,
    @Param('skip') skip: number,
  ): Promise<Department[]> {
    return this.departmentService.getDepartments(take, skip);
  }
  @Get()
  getAllDepartments(): Promise<Department[]> {
    return this.departmentService.getAllDepartments();
  }

  @Patch('/:id')
  updateDepartment(
    @Param('id') id: number,
    @Body() updateDepartmentDto: UpdateDepartmentDto,
  ): Promise<Department> {
    return this.departmentService.updateDepartment(id, updateDepartmentDto);
  }
  @Post()
  createDepartment(
    @Body() createDepartmentDto: CreateDepartmentDto,
  ): Promise<Department> {
    return this.departmentService.createDeprtment(createDepartmentDto);
  }

  @Get('search')
  searchByName(@Request() req): Promise<Department[]> {
    const { q } = req.query;
    return this.departmentService.searchByName(q);
  }
}
