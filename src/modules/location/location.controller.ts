import { Body, Controller, Get, Param, Patch, Post, Query, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/decorator/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { NoAuth } from '../auth/guards/no-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UserRole } from '../users/enum/user-role.entity';
import { LocationDto } from './dto/location.dto';
import { Location } from './entity/location.entity';
import { LocationService } from './location.service';

@ApiBearerAuth()
@ApiTags('Locations')
@Controller('api/locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  // @Roles(UserRole.ADMIN)
  // @UseGuards(JwtAuthGuard,RolesGuard)
  @Get('/:take/:skip')
  getLocations(@Param('take') take:number,@Param('skip') skip:number):Promise<Location[]>{
    return this.locationService.getLocations(take,skip);
  }

  @Get()
  getAllLocations():Promise<Location[]>{
    return this.locationService.getAllLocations();
  }
  @Post()
  createLocation(@Body() locationDto:LocationDto):Promise<Location>{
    return this.locationService.createLocation(locationDto);
  }

  @Patch('/:id')
  updateLocation(@Param('id') id:number ,@Body() locationDto:LocationDto):Promise<Location>{
    return this.locationService.updateLocation(id,locationDto);
  }
  @Get('search')
  searchByName(@Request() req):Promise<Location[]>{
    const { q }= req.query;
    console.log(q);
    return this.locationService.searchByName(q);
  }
}