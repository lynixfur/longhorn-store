import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { HomeController } from './home/home.controller';
import { AdminController } from './admin/admin.controller';
import { BigScreenController } from './big-screen/big-screen.controller';

@Module({
  imports: [],
  controllers: [HomeController, AdminController, BigScreenController],
  providers: [AppService],
})
export class AppModule {}
