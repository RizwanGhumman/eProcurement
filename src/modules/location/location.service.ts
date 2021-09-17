import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository, UpdateResult } from 'typeorm';
import { LocationDto } from './dto/location.dto';
import { Location } from './entity/location.entity';

@Injectable()
export class LocationService {
    constructor(@InjectRepository(Location) private locationRepo:Repository<Location>){}
    //get require locations
  async  getLocations(take:number,skip:number):Promise<Location[]>{
        return await this.locationRepo.find({take:take,skip:skip});
    }
    //get All Locations
    async getAllLocations():Promise<Location[]>{
        return await this.locationRepo.find();
    }
    //create location
   async createLocation(locationDto:LocationDto):Promise<Location>{
        const location= await this.locationRepo.create(locationDto);
       return await this.locationRepo.save(location);
        
    }
    //find location by ID
    async findById(id:number){
         const location= await this.locationRepo.findOne(id);
         if(!location){
             throw new HttpException(`Location with ${id} not found`,HttpStatus.BAD_REQUEST)
         }
         return location
    }
    //Update Location
    async updateLocation(id:number,locationDto:LocationDto):Promise<Location>{
        const location= await this.findById(id)
        location.name = locationDto.name
        return await this.locationRepo.save(location);
    } 
    //search location by name
    async searchByName(q):Promise<Location[]>{
        return await this.locationRepo.find({where:{
            name:Like(`%${q}%`)
        }})
        
    }


}
