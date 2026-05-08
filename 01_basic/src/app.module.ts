import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { UserController } from './user/user.controller';
import { AdminController } from './admin/admin.controller';

@Module({
  imports: [],
  controllers: [AppController, CatController, UserController, AdminController],
  providers: [AppService],
})
export class AppModule {}
