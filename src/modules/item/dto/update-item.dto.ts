import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class UpdateItemDto{
    @ApiProperty()
    @IsOptional()
    @IsString()
    name: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    category: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    detail: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    uom: string;
  }