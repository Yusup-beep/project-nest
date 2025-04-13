import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { SessionSerializer } from './session';
import { Module } from '@nestjs/common';

@Module({
  imports: [PassportModule, UsersModule],
  controllers: [AuthController],
  providers: [LocalStrategy, SessionSerializer, AuthService],
})
export class AuthModule {}
