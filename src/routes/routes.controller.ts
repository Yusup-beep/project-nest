import { Controller, Get, Render } from '@nestjs/common';
import { Layout } from 'src/decorators/layout.decorator';

@Controller()
export class RoutesController {
  constructor() {}

  @Get()
  @Layout('main-layout')
  @Render('index')
  homePage() {
    return { name: 'Yusup', title: 'Home' };
  }

  @Get('/login')
  @Render('login')
  loginPage() {
    return { name: 'Yusup', title: 'Login' };
  }

  @Get('/sign-up')
  @Render('sign-up')
  signUpPage() {
    return { name: 'Yusup', title: 'Sign up' };
  }
}
