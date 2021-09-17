import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { LocationService } from '../location/location.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import {  UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entity/department.entity';

@Injectable()
export class DepartmentService {

    constructor(@InjectRepository(Department)
     private readonly departmentRepo:Repository<Department>,
    private readonly locationService:LocationService)
    
    {}
    //get departments with take and skip
    async getDepartments(take,skip):Promise<Department[]>{
        const departments= await this.departmentRepo.find({take,skip});
        const locations=[];
        departments.forEach((department)=>{
            locations.push(department.location)
        })
        await Promise.all(locations);
        return departments;
    }
    //get all departments
    async getAllDepartments():Promise<Department[]>{
        return await this.departmentRepo.find();
    }
    //get department by id
    async findById(id:number){
        const department= await this.departmentRepo.findOne(id);
        if(!department){
            throw new HttpException(`Location with ${id} id not found`,HttpStatus.BAD_REQUEST)
        }
        return department
   }
   //update department
    async updateDepartment(id:number,updateDepartmentDto:UpdateDepartmentDto):Promise<Department>{
        const department= await this.findById(id);
        try{
            const keys= Object.keys(updateDepartmentDto);
            if(keys.length>0){
                const index=keys.findIndex(item=>item==='locationId')
                if(index!==-1){
                    const location = await this.locationService.findById(updateDepartmentDto.locationId)
                    department.locationId = location.id;
                    // delete updateDepartmentDto.locationId
                    keys.splice(index,1)
                }
                
            keys.forEach((key)=>{
                department[`${key}`] = updateDepartmentDto[`${key}`]
            })
            const res =  await this.departmentRepo.save(department)
            await res.location
            return res
            }else{
             throw new HttpException("please provide values to update",HttpStatus.BAD_REQUEST)  
            }
        }catch(error){
            let msg="An Error Occured please try again";
            if (error.message.includes('duplicate')){
                msg="Department is already exist at this location";
            }
            throw new HttpException(msg,HttpStatus.BAD_REQUEST)
        }
           
        
    }
    async createDeprtment(createDepartmentDto:CreateDepartmentDto):Promise<Department>{
        try{
            const department = new Department()
            const location = await this.locationService.findById(createDepartmentDto.locationId)
            department.location = location
            delete createDepartmentDto.locationId
            Object.keys(createDepartmentDto).forEach((key)=>{
                department[`${key}`] = createDepartmentDto[`${key}`]
            })
            return await this.departmentRepo.save(department);
        }
        catch(error){
           // console.log(error.message.includes('duplicate'));
            let msg="An Error Occured please try again";
            if (error.message.includes('duplicate')){
                msg="Department is already exist at this location";
            }
            throw new HttpException(msg,HttpStatus.BAD_REQUEST)
        }
       
    }
    async searchByName(q):Promise<Department[]>{
        const departments=await this.departmentRepo.find({where:{
            name:Like(`%${q}%`)
        }})
        const locations=[];
       departments.forEach((department)=>{
           locations.push(department.location);
       })
       await Promise.all(locations)
       return departments;
    }
}
