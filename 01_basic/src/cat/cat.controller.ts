import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateCatDto } from './entity/create-cat.dto';

@Controller('cat')
export class CatController {
  @Get()
  //   @Redirect('https://unsplash.com/s/photos/cat', 301)
  viewCatImages() {}

  @Get('query')
  findAll(
    @Query('age', ParseIntPipe) age: number,
    @Query('breed') breed: string,
  ) {
    return `This action returns all cats filtered by : age: ${age} and breed:${breed}`;
  }
  // @Post()
  // // @Header('Cache-Control', 'no-store')
  // create(@Body() createCatDto: CreateCatDto) {
  //   return 'This action adds a new cate';
  // }
  @Post()
  create(@Body('name') name: string) {
    return `Cat Name: ${name}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }
}
