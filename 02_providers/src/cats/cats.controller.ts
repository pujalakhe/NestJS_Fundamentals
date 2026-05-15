import { Body, Controller, Post, Get } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { CreateCatDto } from "./entity/create-cat.dto";
import { Cat } from "./types/cats.model";

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    const data = this.catsService.create(createCatDto);
    return data;
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return await this.catsService.findAll();
  }
}
