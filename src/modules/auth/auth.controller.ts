import {
  Body,
  Controller,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Req() req) {
    return new Promise((resolve, reject) => {
      req.login(req.user, (err) => {
        if (err) {
          return reject(new UnauthorizedException());
        }
        resolve({
          message: 'Success',
          user: req.user,
        });
      });
    });
  }

  @Post('/signup')
  async signUp(
    @Body() data: { fullName: string; email: string; password: string },
  ) {
    await this.usersService.createUser(data);
    return {
      message: 'Success',
    };
  }
}
