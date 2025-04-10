import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Layout } from './decorators/layout.decorator';

@Layout('layout')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return { name: 'Yusup' };
  }
}
