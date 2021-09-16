import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class UpdateDepartmentDto{
    @ApiProperty()
    @IsOptional()
    name:string;

    @ApiProperty()
    @IsOptional()
    type:string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    locationId:number;

}