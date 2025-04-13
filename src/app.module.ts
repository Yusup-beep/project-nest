import { Module } from '@nestjs/common';
import { RoutesController } from './routes/routes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import config from './config/typeorm';
@Module({
  imports: [TypeOrmModule.forRoot(config()), AuthModule, UsersModule],
  controllers: [RoutesController],
  providers: [],
})
export class AppModule {}
