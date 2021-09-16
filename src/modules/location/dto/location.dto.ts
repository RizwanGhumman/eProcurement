import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class LocationDto{
    @ApiProperty()
    @IsNotEmpty()
    name: string;
  }
