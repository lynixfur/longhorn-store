import { Controller, Get, Render } from '@nestjs/common';

@Controller('bigscreen')
export class BigScreenController {
    @Get()
    @Render('bigscreen')
    Root() {
      return  {message: 'This action returns all cats'};
    }
}
