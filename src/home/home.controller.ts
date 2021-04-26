import { Controller, Get, Render } from '@nestjs/common';

@Controller('/')
export class HomeController {
    @Get()
    @Render('home')
    Root() {
      return  {message: 'This action returns all cats'};
    }
}
