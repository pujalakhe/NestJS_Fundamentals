import { Controller, Get, HttpCode, Query, Req, Res } from '@nestjs/common';
import type { Request } from 'express';
import type { Response } from 'express';
@Controller('users')
export class UserController {
  @Get()
  @HttpCode(200)
  findAll() {
    return ['User1', 'User2'];
  }

  @Get('res')
  findAllRes(@Res() res: Response) {
    res.status(202).send(['User1', 'User2', '3']);
  }
  @Get('active')
  findActiveUsers() {
    return [{ name: 'user1', status: 'isActive' }];
  }

  @Get('req-body')
  @HttpCode(200)
  findAllUsers(@Req() req: Request): string {
    const host = req.headers['host'];
    return `This action returns all users at host: ${host}`;
  }

  @Get('limit')
  findLimit(@Query('limit') limit: string) {
    return limit;
  }
  @Get('wild/*path')
  findWild() {
    return 'This route uses a wildcard';
  }
}
