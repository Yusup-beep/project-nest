import { Controller, Get, Render, Req, Res } from '@nestjs/common';
import { Response } from 'express';
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
  loginPage(@Req() req, @Res() res: Response) {
    if (req.user) {
      return res.redirect('/');
    }
    return { name: 'Yusup', title: 'Login' };
  }

  @Get('/sign-up')
  @Render('sign-up')
  signUpPage() {
    return { name: 'Yusup', title: 'Sign up' };
  }
}
