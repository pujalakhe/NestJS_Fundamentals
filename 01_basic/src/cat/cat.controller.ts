import { Controller, Get, Header, Param, Post } from '@nestjs/common';

@Controller('cat')
export class CatController {
  @Get()
  //   @Redirect('https://unsplash.com/s/photos/cat', 301)
  viewCatImages() {}

  @Post()
  @Header('Cache-Control', 'no-store')
  create() {
    return 'This action adds a new cate';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }
}
