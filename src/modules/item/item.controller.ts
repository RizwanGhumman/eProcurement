import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Request,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entity/item.entity';
import { ItemService } from './item.service';
@ApiBearerAuth()
@ApiTags('Items')
@Controller('api/items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  getAllItems(): Promise<Item[]> {
    return this.itemService.getAllItems();
  }

  @Get('/:take/:skip')
  getItems(
    @Param('take') take: number,
    @Param('skip') skip: number,
  ): Promise<Item[]> {
    return this.itemService.getItems(take, skip);
  }

  @Post()
  createItem(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemService.createItem(createItemDto);
  }

  @Patch('/:id')
  updateItem(
    @Param('id') id: number,
    @Body() updateItemDto: UpdateItemDto,
  ): Promise<Item> {
    return this.itemService.updateItem(id, updateItemDto);
  }

  @Get('search')
  searchByName(@Request() req): Promise<Item[]> {
    const { q } = req.query;
    console.log(q);
    return this.itemService.searchByName(q);
  }
}
