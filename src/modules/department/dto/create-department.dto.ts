import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty,IsNumber, IsString } from "class-validator";

export class CreateDepartmentDto{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name:string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    type:string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    locationId:number;
}