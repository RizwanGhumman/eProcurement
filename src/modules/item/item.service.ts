import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entity/item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private readonly itemRepo: Repository<Item>,
  ) {}

  async findById(id: number): Promise<Item> {
    const item = await this.itemRepo.findOne(id);
    if (!item) {
      throw new HttpException(
        `Item with ${id} is not found`,
        HttpStatus.BAD_REQUEST,
      );
    }
    return item;
  }
  // get all items
  async getAllItems(): Promise<Item[]> {
    return await this.itemRepo.find();
  }

  // get items of your choice
  async getItems(take: number, skip: number): Promise<Item[]> {
    return await this.itemRepo.find({ take, skip });
  }

  // create new item
  async createItem(createItemDto: CreateItemDto): Promise<Item> {
    const item = await this.itemRepo.create(createItemDto);
    return await this.itemRepo.save(item);
  }

  //update item
  async updateItem(id: number, updateItemDto: UpdateItemDto): Promise<Item> {
    const item = await this.findById(id);
    console.log(item)
    Object.keys(updateItemDto).forEach((key) => {
      item[`${key}`] = updateItemDto[`${key}`];
    });
    await this.itemRepo.save(item)
    return item;
  }

  async searchByName(q): Promise<Item[]> {
    return await this.itemRepo.find({
      where: {
        name: Like(`%${q}%`),
      },
    });
  }
}
