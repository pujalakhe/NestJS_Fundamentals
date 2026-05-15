import {
  Body,
  Controller,
  Post,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './entity/create-cat.dto';
import { Cat } from './types/cats.model';
import { ForbiddenException } from './forbidden.exception';

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

  @Get('error')
  async findError() {
    // throw new HttpException('Forbidden',HttpStatus.FORBIDDEN)
    throw new ForbiddenException()
    try {
      throw new Error('Database failed');
    } catch (error) {
      throw new HttpException(
        {
          status: 403,
          error: 'Custom Forbidden Message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
}
